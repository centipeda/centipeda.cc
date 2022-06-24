# standard library

# extra libraries
import waitress
from flask import Flask, send_file

def create_app() -> Flask:
    app = Flask(__name__)

    @app.route('/', methods=['PUT'])
    update_notepad():
        return ''

    @app.route('/', methods=['GET')
    show_notepad():
        return send_file('index.html')
    
    return app

def run():
    app = create_app()
    waitress.serve(app, port=9080)

if __name__ == "__main__":
    run()
