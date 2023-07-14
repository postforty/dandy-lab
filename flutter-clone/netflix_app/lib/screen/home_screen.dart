import "package:flutter/material.dart";
import "package:netflix_app/model/model_movie.dart";

class HomeScreen extends StatefulWidget {
  _HomeScreenState createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  List<Movie> movies = [
    Movie.fromMap({
      'title': 'EXPO 홍보영상관 개관',
      'keyword': '2030/expo',
      'poster': 'test_1.png',
      'like': false
    })
  ];
  @override
  void initState() {
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return TopBar();
  }
}

class TopBar extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
        padding: EdgeInsets.fromLTRB(20, 7, 20, 7),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: <Widget>[
            Image.asset(
              'images/logo.png',
              fit: BoxFit.contain,
              height: 25,
            ),
            Container(
              padding: EdgeInsets.only(right: 1),
              child: Text('TV 프로그램', style: TextStyle(fontSize: 14)),
            ),
            Container(
              padding: EdgeInsets.only(right: 1),
              child: Text('영화', style: TextStyle(fontSize: 14)),
            ),
            Container(
              padding: EdgeInsets.only(right: 1),
              child: Text('내가 찜한 콘텐츠', style: TextStyle(fontSize: 14)),
            ),
          ],
        ));
  }
}
