from flask import Flask, request, jsonify
from gradio_client import Client
client = Client("peteparker456/medical_diagnosis_llama2")
app = Flask(__name__)

@app.route('/generate_data', methods=['POST'])
def generate_data():
    # Generate data using the Gradio model
    input_data = request.get_json()
    print(input_data)
    result = client.predict(
		message= input_data.message,
		system_message="""You are Medical AI Assistant. Please be thorough and provide an informative answer. 
    If you don't know the answer to a specific medical inquiry, advise seeking professional help.""",
		max_tokens=512,
		temperature=0.7,
		top_p=0.95,
		api_name="/chat"
)
    return jsonify({'data': result})

if __name__ == '__main__':
    app.run(debug=True)