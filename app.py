from flask import Flask, request, jsonify
from flask_cors import CORS
from main import get_response, INSTRUCTIONS
app = Flask(__name__)
cors = CORS(app)

@app.route('/api/answer', methods=['POST'])
def answer():
    question = request.json['question']
    response = get_response(INSTRUCTIONS + question)
    return jsonify({'answer': response})

if __name__ == '__main__':
    app.run(debug=True)