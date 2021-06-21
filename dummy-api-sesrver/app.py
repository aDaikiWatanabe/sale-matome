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
          "purchaseLink": "https://book.dmm.com/detail/b900rkds02366/",
          "title": "ブルーピリオド(1)",
          "author": "山口つばさ",
          "price": 660,
          "imageLink": None,
          "tag": ["青年コミック", "ヒューマンドラマ"],
        }
      },
      {
        "data": {
          "purchaseLink": "https://book.dmm.com/detail/b999asqex03051/",
          "title": "薬屋のひとりごと 1巻",
          "author": "ねこクラゲ  七緒一綺  しのとうこ  日向夏（ヒーロー文庫/主婦の友社刊）",
          "price": 618,
          "imageLink": None,
          "tag": ["少女コミック", "ミステリー・サスペンス", "歴史・時代劇・戦記"],
        }
      },
      {
        "data": {
          "purchaseLink": "https://book.dmm.com/detail/b999asqex03506/",
          "title": "ブルーピリオド(1)",
          "author": "Roy 蘭々 りりんら",
          "price": 309,
          "imageLink": None,
          "tag": ["少年コミック", "日常", "異世界系", "ルポ・エッセイ・自叙伝", "ファンタジー"],
        }
      },
      {
        "data": {
          "purchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "author": "John Do",
          "price": 2300,
          "imageLink": None,
          "tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "purchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "author": "John Do",
          "price": 2300,
          "imageLink": None,
          "tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "purchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "author": "John Do",
          "price": 2300,
          "imageLink": None,
          "tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "purchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "author": "John Do",
          "price": 2300,
          "imageLink": None,
          "tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "purchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "author": "John Do",
          "price": 2300,
          "imageLink": None,
          "tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "purchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "author": "John Do",
          "price": 2300,
          "imageLink": None,
          "tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "purchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "author": "John Do",
          "price": 2300,
          "imageLink": None,
          "tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "purchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "author": "John Do",
          "price": 2300,
          "imageLink": None,
          "tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "purchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "author": "John Do",
          "price": 2300,
          "imageLink": None,
          "tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "purchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "author": "John Do",
          "price": 2300,
          "imageLink": None,
          "tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "purchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "author": "John Do",
          "price": 2300,
          "imageLink": None,
          "tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "purchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "author": "John Do",
          "price": 2300,
          "imageLink": None,
          "tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "purchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "author": "John Do",
          "price": 2300,
          "imageLink": None,
          "tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "purchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "author": "John Do",
          "price": 2300,
          "imageLink": None,
          "tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "purchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "author": "John Do",
          "price": 2300,
          "imageLink": None,
          "tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "purchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "author": "John Do",
          "price": 2300,
          "imageLink": None,
          "tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "purchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "author": "John Do",
          "price": 2300,
          "imageLink": None,
          "tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "purchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "author": "John Do",
          "price": 2300,
          "imageLink": None,
          "tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "purchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "author": "John Do",
          "price": 2300,
          "imageLink": None,
          "tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "purchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "author": "John Do",
          "price": 2300,
          "imageLink": None,
          "tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "purchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "author": "John Do",
          "price": 2300,
          "imageLink": None,
          "tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "purchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "author": "John Do",
          "price": 2300,
          "imageLink": None,
          "tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "purchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "author": "John Do",
          "price": 2300,
          "imageLink": None,
          "tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "purchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "author": "John Do",
          "price": 2300,
          "imageLink": None,
          "tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "purchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "author": "John Do",
          "price": 2300,
          "imageLink": None,
          "tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "purchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "author": "John Do",
          "price": 2300,
          "imageLink": None,
          "tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "purchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "author": "John Do",
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
  print("Serving on port 3000...")
  httpd.serve_forever()
