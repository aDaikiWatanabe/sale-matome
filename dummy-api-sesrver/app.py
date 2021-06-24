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
          "title": "ブルーピリオド(1)",
          "author": "山口つばさ",
          "price": 660,
          "imageLink": None,
          "tag": ["青年コミック", "ヒューマンドラマ"],
        }
      },
      {
        "data": {
          "id": "2",
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
          "id": "3",
          "purchaseLink": "https://book.dmm.com/detail/b999asqex03506/",
          "title": "神様に拾われたなんとかかんとか2",
          "author": "Roy 蘭々 りりんら",
          "price": 309,
          "imageLink": None,
          "tag": ["少年コミック", "日常", "異世界系", "ルポ・エッセイ・自叙伝", "ファンタジー"],
        }
      },
      {
        "data": {
          "id": "4",
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
          "id": "5",
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
          "id": "6",
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
          "id": "7",
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
          "id": "8",
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
          "id": "9",
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
          "id": "10",
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
          "id": "11",
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
          "id": "12",
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
          "id": "13",
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
          "id": "14",
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
          "id": "15",
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
          "id": "16",
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
          "id": "17",
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
          "id": "18",
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
          "id": "19",
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
          "id": "20",
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
          "id": "21",
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
          "id": "22",
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
          "id": "23",
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
          "id": "24",
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
          "id": "25",
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
          "id": "26",
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
          "id": "27",
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
          "id": "28",
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
          "id": "29",
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
          "id": "30",
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
  print("Serving on port " + str(PORT) + "...")
  httpd.serve_forever()
