from flask import Flask,jsonify

from duckduckgo_search import DDGS
app = Flask(__name__)



@app.route("/api/search/<query>")
def hello_world(query):
    with DDGS() as ddgs:
         myList = []
         for r in ddgs.text(query, region='in-en', safesearch='Off', timelimit='y'):
             myList.append(r)

    return jsonify(myList) 


@app.route("/api/images/<query>")
def get_images(query):
    with DDGS() as ddgs:
         myList = []
         for r in ddgs.images(query,
      region="wt-wt",
      safesearch="Off"):
             myList.append(r)

    return jsonify(myList)


@app.route("/api/videos/<query>")
def get_videos(query):
    with DDGS() as ddgs:
         myList = []
         for r in ddgs.videos(query,
      region="wt-wt",
      safesearch="Off"):
             myList.append(r)

    return jsonify(myList)        


@app.route("/api/news/<query>")
def get_news(query):
    with DDGS() as ddgs:
         myList = []
         for r in ddgs.news(query,
      region="in-en",
      safesearch="Off"):
             myList.append(r)

    return jsonify(myList)
   

@app.route("/api/suggestions/<query>")
def get_suggestions(query):
    with DDGS() as ddgs:
         myList = []
         for r in ddgs.suggestions(query):
             myList.append(r)

    return jsonify(myList)

@app.route("/api/answers/<query>")
def get_answers(query):
    with DDGS() as ddgs:
         myList = []
         for r in ddgs.answers(query):
             myList.append(r)

    return jsonify(myList)

@app.route("/api/maps/<query>")
def get_maps(query):
    with DDGS() as ddgs:
         myList = []
         for r in ddgs.maps(query):
             myList.append(r)

    return jsonify(myList)


