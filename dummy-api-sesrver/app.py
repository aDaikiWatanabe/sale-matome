from wsgiref.simple_server import make_server

import json

PORT=4000

def app(environ, start_response):
  status = '200 OK'
  headers = [
    ('Content-type', 'application/json; charset=utf-8'),
    ('Access-Control-Allow-Origin', '*'),
  ]
  path = environ["PATH_INFO"]
  if path == "/book":
    start_response(status, headers)
    json_data = json.dumps([
      {
        "data": {
          "id": "1",
          "purchaseLink": "https://book.dmm.com/detail/b900rkds02366/",
          "site": "dmm",
          "title": "ブルーピリオド(1)",
          "authors": ["山口つばさ"],
          "price": 660,
          "imageLink": None,
          "tag": ["青年コミック", "ヒューマンドラマ"],
        }
      },
      {
        "data": {
          "id": "2",
          "purchaseLink": "https://book.dmm.com/detail/b999asqex03051/",
          "site": "dmm",
          "title": "薬屋のひとりごと 1巻",
          "authors": ["ねこクラゲ", "七緒一綺", "しのとうこ", "日向夏（ヒーロー文庫/主婦の友社刊）"],
          "price": 618,
          "imageLink": None,
          "tag": ["少女コミック", "ミステリー・サスペンス", "歴史・時代劇・戦記"],
        }
      },
      {
        "data": {
          "id": "3",
          "purchaseLink": "https://book.dmm.com/detail/b999asqex03506/",
          "site": "dmm",
          "title": "神様に拾われたなんとかかんとか2",
          "authors": ["Roy", "蘭々", "りりんら"],
          "price": 309,
          "imageLink": None,
          "tag": ["少年コミック", "日常", "異世界系", "ルポ・エッセイ・自叙伝", "ファンタジー"],
        }
      },
      {
        "data": {
          "id": "4",
          "purchaseLink": "http://example.com",
          "site": "dmm",
          "title": "ブルーピリオド(1)",
          "authors": ["Roy", "蘭々", "りりんら"],
          "price": 2300,
          "imageLink": None,
          "tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "id": "5",
          "purchaseLink": "http://example.com",
          "site": "dmm",
          "title": "ブルーピリオド(1)",
          "authors": ["Roy", "蘭々", "りりんら"],
          "price": 2300,
          "imageLink": None,
          "tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "id": "6",
          "purchaseLink": "https://book.dmm.com/detail/b900rkds02366/",
          "site": "dmm",
          "title": "ブルーピリオド(1)",
          "authors": ["山口つばさ"],
          "price": 660,
          "imageLink": None,
          "tag": ["青年コミック", "ヒューマンドラマ"],
        }
      },
      {
        "data": {
          "id": "7",
          "purchaseLink": "https://book.dmm.com/detail/b999asqex03051/",
          "site": "dmm",
          "title": "薬屋のひとりごと 1巻",
          "authors": ["ねこクラゲ", "七緒一綺", "しのとうこ", "日向夏（ヒーロー文庫/主婦の友社刊）"],
          "price": 618,
          "imageLink": None,
          "tag": ["少女コミック", "ミステリー・サスペンス", "歴史・時代劇・戦記"],
        }
      },
      {
        "data": {
          "id": "8",
          "purchaseLink": "https://book.dmm.com/detail/b999asqex03506/",
          "site": "dmm",
          "title": "神様に拾われたなんとかかんとか2",
          "authors": ["Roy", "蘭々", "りりんら"],
          "price": 309,
          "imageLink": None,
          "tag": ["少年コミック", "日常", "異世界系", "ルポ・エッセイ・自叙伝", "ファンタジー"],
        }
      },
      {
        "data": {
          "id": "9",
          "purchaseLink": "http://example.com",
          "site": "dmm",
          "title": "ブルーピリオド(1)",
          "authors": ["Roy", "蘭々", "りりんら"],
          "price": 2300,
          "imageLink": None,
          "tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "id": "10",
          "purchaseLink": "http://example.com",
          "site": "dmm",
          "title": "ブルーピリオド(1)",
          "authors": ["Roy", "蘭々", "りりんら"],
          "price": 2300,
          "imageLink": None,
          "tag": ["SF", "ラブコメ"],
        }
      },
    ])
    return [json_data.encode("utf-8")]
  else:
    start_response(status, headers)
    return [json.dumps({'message':'hoge'}).encode("utf-8")]

with make_server('', PORT, app) as httpd:
  print("Serving on port " + str(PORT) + "...")
  httpd.serve_forever()
