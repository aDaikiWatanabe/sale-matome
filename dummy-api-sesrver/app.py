from wsgiref.simple_server import make_server

import json


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
          "PurchaseLink": "https://book.dmm.com/detail/b900rkds02366/",
          "title": "ブルーピリオド(1)",
          "Author": "山口つばさ",
          "Price": 660,
          "ImageLink": None,
          "Tag": ["青年コミック", "ヒューマンドラマ"],
        }
      },
      {
        "data": {
          "PurchaseLink": "https://book.dmm.com/detail/b999asqex03051/",
          "title": "薬屋のひとりごと 1巻",
          "Author": "ねこクラゲ  七緒一綺  しのとうこ  日向夏（ヒーロー文庫/主婦の友社刊）",
          "Price": 618,
          "ImageLink": None,
          "Tag": ["少女コミック", "ミステリー・サスペンス", "歴史・時代劇・戦記"],
        }
      },
      {
        "data": {
          "PurchaseLink": "https://book.dmm.com/detail/b999asqex03506/",
          "title": "ブルーピリオド(1)",
          "Author": "Roy 蘭々 りりんら",
          "Price": 309,
          "ImageLink": None,
          "Tag": ["少年コミック", "日常", "異世界系", "ルポ・エッセイ・自叙伝", "ファンタジー"],
        }
      },
      {
        "data": {
          "PurchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "Author": "John Do",
          "Price": 2300,
          "ImageLink": None,
          "Tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "PurchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "Author": "John Do",
          "Price": 2300,
          "ImageLink": None,
          "Tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "PurchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "Author": "John Do",
          "Price": 2300,
          "ImageLink": None,
          "Tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "PurchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "Author": "John Do",
          "Price": 2300,
          "ImageLink": None,
          "Tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "PurchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "Author": "John Do",
          "Price": 2300,
          "ImageLink": None,
          "Tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "PurchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "Author": "John Do",
          "Price": 2300,
          "ImageLink": None,
          "Tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "PurchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "Author": "John Do",
          "Price": 2300,
          "ImageLink": None,
          "Tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "PurchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "Author": "John Do",
          "Price": 2300,
          "ImageLink": None,
          "Tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "PurchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "Author": "John Do",
          "Price": 2300,
          "ImageLink": None,
          "Tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "PurchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "Author": "John Do",
          "Price": 2300,
          "ImageLink": None,
          "Tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "PurchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "Author": "John Do",
          "Price": 2300,
          "ImageLink": None,
          "Tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "PurchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "Author": "John Do",
          "Price": 2300,
          "ImageLink": None,
          "Tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "PurchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "Author": "John Do",
          "Price": 2300,
          "ImageLink": None,
          "Tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "PurchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "Author": "John Do",
          "Price": 2300,
          "ImageLink": None,
          "Tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "PurchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "Author": "John Do",
          "Price": 2300,
          "ImageLink": None,
          "Tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "PurchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "Author": "John Do",
          "Price": 2300,
          "ImageLink": None,
          "Tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "PurchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "Author": "John Do",
          "Price": 2300,
          "ImageLink": None,
          "Tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "PurchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "Author": "John Do",
          "Price": 2300,
          "ImageLink": None,
          "Tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "PurchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "Author": "John Do",
          "Price": 2300,
          "ImageLink": None,
          "Tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "PurchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "Author": "John Do",
          "Price": 2300,
          "ImageLink": None,
          "Tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "PurchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "Author": "John Do",
          "Price": 2300,
          "ImageLink": None,
          "Tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "PurchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "Author": "John Do",
          "Price": 2300,
          "ImageLink": None,
          "Tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "PurchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "Author": "John Do",
          "Price": 2300,
          "ImageLink": None,
          "Tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "PurchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "Author": "John Do",
          "Price": 2300,
          "ImageLink": None,
          "Tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "PurchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "Author": "John Do",
          "Price": 2300,
          "ImageLink": None,
          "Tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "PurchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "Author": "John Do",
          "Price": 2300,
          "ImageLink": None,
          "Tag": ["SF", "ラブコメ"],
        }
      },
      {
        "data": {
          "PurchaseLink": "http://example.com",
          "title": "ブルーピリオド(1)",
          "Author": "John Do",
          "Price": 2300,
          "ImageLink": None,
          "Tag": ["SF", "ラブコメ"],
        }
      },
    ])
    return [json_data.encode("utf-8")]
  else:
    start_response(status, headers)
    return [json.dumps({'message':'hoge'}).encode("utf-8")]

with make_server('', 3000, app) as httpd:
  print("Serving on port 3000...")
  httpd.serve_forever()
