from flask import Flask, render_template, request

app = Flask(__name__)


@app.route('/gamemaster')
def gamemaster():
    return 'gamemaster'


@app.route('/rules')
def rules():
    return render_template('rules.html')


@app.route('/')
def home():
    return render_template('home.html')


if __name__ == '__main__':
    app.config['TEMPLATES_AUTO_RELOAD'] = True
    app.run(host='localhost', debug=True)
