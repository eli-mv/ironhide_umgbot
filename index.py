from flask import Flask

app = Flask(__name__, template_folder=".")

@app.route('/')
def home():
    return 'hello world'

if __name__== '__name__':
    app.run(port= 3000, debug=True)