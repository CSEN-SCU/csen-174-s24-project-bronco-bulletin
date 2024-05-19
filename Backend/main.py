from flask import Flask, jsonify, request

app = Flask(__name__)

# Route to get posts
@app.route('/posts', methods=['GET'])
def get_posts():
    pass
    # return jsonify({'posts': posts})

if __name__ == '__main__':
    app.run(debug=True)
