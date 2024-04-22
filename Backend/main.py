from flask import Flask, jsonify, request

app = Flask(__name__)

# Sample data
posts = [
    {
        "title": "ACM Competitive Programming",
        "description": "Join now!",
        "author": "ACM Board",
        "image": "link"
    },
]

# Route to get posts
@app.route('/posts', methods=['GET'])
def get_posts():
    return jsonify({'posts': posts})

if __name__ == '__main__':
    app.run(debug=True)
