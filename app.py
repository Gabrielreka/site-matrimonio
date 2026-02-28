from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    # Aqui você define os nomes que vão aparecer no site
    return render_template('site.html', nome1="Naty", nome2="Carlos")

if __name__ == '__main__':
    app.run(debug=True)