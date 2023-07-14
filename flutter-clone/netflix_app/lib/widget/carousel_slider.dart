import "package:flutter/material.dart";
import "package:netflix_app/model/model_movie.dart";
import 'package:carousel_slider/carousel_slider.dart';

class CarouselImage extends StatefulWidget {
  final List<Movie> movies;
  CarouselImage({required this.movies});
  _CarouselImageState createState() => _CarouselImageState();
}

class _CarouselImageState extends State<CarouselImage> {
  late List<Movie> movies;
  late List<Widget> images;
  late List<String> keywords;
  late List<bool> likes;
  int _currentPage = 0;
  late String _currentKeyword;

  @override
  void initState() {
    super.initState();
    movies = widget.movies;
    images = movies.map((m) => Image.asset('./images/' + m.poster)).toList();
    keywords = movies.map((m) => m.keyword).toList();
    likes = movies.map((m) => m.like).toList();
    _currentKeyword = keywords[0];
  }

  @override
  Widget build(BuildContext context) {
    return Container(
        child: Column(children: <Widget>[
      Container(
        padding: EdgeInsets.all(20),
      ),
      CarouselSlider(
          items: images,
          options: CarouselOptions(enlargeCenterPage: true, height: 200)),
      Container(
        padding: EdgeInsets.fromLTRB(0, 10, 0, 3),
        child: Text(
          _currentKeyword,
          style: TextStyle(fontSize: 11),
        ),
      ),
      Container(
          child: Row(
        children: <Widget>[
          Container(
              child: Column(
            children: <Widget>[
              likes[_currentPage]
                  ? IconButton(
                      icon: Icon(Icons.check),
                      onPressed: () {},
                    )
                  : IconButton(
                      icon: Icon(Icons.add),
                      onPressed: () {},
                    ),
              Text(
                '내가 찜한 콘텐츠',
                style: TextStyle(fontSize: 11),
              )
            ],
          )),
          Container(
            padding: EdgeInsets.only(right: 10),
            child: ElevatedButton(
                style: ElevatedButton.styleFrom(
                  // ignore: deprecated_member_use
                  primary: Colors.white, // foreground
                ),
                onPressed: () {},
                child: Row(
                  children: <Widget>[
                    Icon(
                      Icons.play_arrow,
                      color: Colors.black,
                    ),
                    Padding(
                      padding: EdgeInsets.all(3),
                    ),
                    Text('재생', style: TextStyle(color: Colors.black))
                  ],
                )),
          ),
          Container(
              padding: EdgeInsets.only(right: 10),
              child: Column(
                children: <Widget>[
                  IconButton(
                    icon: Icon(Icons.info),
                    onPressed: () {},
                  ),
                  Text(
                    '정보',
                    style: TextStyle(fontSize: 11),
                  )
                ],
              ))
        ],
      ))
    ]));
  }
}
