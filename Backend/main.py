import sys
import os
from dotenv import load_dotenv
from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin

# Adjust the PYTHONPATH to include the parent directory of Backend
sys.path.append(os.path.dirname(os.path.abspath(__file__)))

from modules.database.dbHandler import PGManager
from modules.database.post import Tag

load_dotenv()  # Load environment variables from .env file

app = Flask(__name__)
cors = CORS(app)
manager = PGManager("csen174_owner", os.getenv("PGPASSWORD"))

@cross_origin
@app.route('/', methods=['GET'])
def index():
    return "Hello, world!"

# Route to get all posts
@cross_origin
@app.route('/posts', methods=['GET'])
def get_all_posts():
    try:
        posts = manager.get_posts()
        posts_list = [{
            'post_id': post.post_id,
            'author': post.author,
            'title': post.title,
            'description': post.description,
            'current_time': post.current_time,
            'tags': [tag.name for tag in post.tags]
        } for post in posts]
        return jsonify({'posts': posts_list})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Route to add a new post
@cross_origin
@app.route('/posts', methods=['POST'])
def add_post():
    try:
        data = request.get_json()
        author = data.get('author')
        title = data.get('title')
        description = data.get('description')
        tag_names = data.get('tags', [])
        
        if not author or not title or not description:
            return jsonify({'error': 'Missing required fields'}), 400
        
        post = manager.insert_post(author, title, description, tag_names)
        return jsonify({
            'post_id': post.post_id,
            'author': post.author,
            'title': post.title,
            'description': post.description,
            'current_time': post.current_time,
            'tags': [tag.name for tag in post.tags]
        }), 201
    except ValueError as ve:
        return jsonify({'error': str(ve)}), 400
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# Route to get posts by a specific tag
@cross_origin
@app.route('/posts/tag/<string:tag_name>', methods=['GET'])
def get_posts_by_tag(tag_name):
    try:
        session = manager.Session()
        tag = session.query(Tag).filter_by(name=tag_name).first()
        if not tag:
            return jsonify({'error': 'Tag not found'}), 404
        
        posts = tag.posts
        posts_list = [{
            'post_id': post.post_id,
            'author': post.author,
            'title': post.title,
            'description': post.description,
            'current_time': post.current_time,
            'tags': [tag.name for tag in post.tags]
        } for post in posts]
        session.close()
        return jsonify({'posts': posts_list})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port, debug=True)