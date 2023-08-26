from flask import Flask, jsonify, request
from flask_restful import Api, Resource

app = Flask(__name__)
api = Api()


PRODUCTS = {

}


class TodoProduct(Resource):
    def get(self):
        return PRODUCTS

    def post(self):
        return PRODUCTS


api.add_resource(TodoProduct, '/api/product/0')


@app.route("/")
def hello():
    return "Hello, World!"


if __name__ == '__mane__':
    app.run(debug=True)