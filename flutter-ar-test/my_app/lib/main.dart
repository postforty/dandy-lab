import 'package:flutter/material.dart';
import 'package:arcore_flutter_plugin/arcore_flutter_plugin.dart';
import 'package:vector_math/vector_math_64.dart' show Vector3;

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'ARCore Test App',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: ARScreen(),
    );
  }
}

class ARScreen extends StatefulWidget {
  @override
  _ARScreenState createState() => _ARScreenState();
}

class _ARScreenState extends State<ARScreen> {
  late ArCoreController arCoreController;
  late ArCoreNode cubeNode;

  @override
  void dispose() {
    arCoreController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('ARCore Test'),
      ),
      body: ArCoreView(
        onArCoreViewCreated: _onArCoreViewCreated,
      ),
    );
  }

  void _onArCoreViewCreated(ArCoreController controller) {
    arCoreController = controller;

    _addCube();
  }

  void _addCube() {
    final material = ArCoreMaterial(color: Colors.red);

    final cube = ArCoreCube(
      materials: [material],
      size: Vector3(0.2, 0.2, 0.2),
    );

    cubeNode = ArCoreNode(
      shape: cube,
      position: Vector3(0, 0, -1.5),
    );

    arCoreController.addArCoreNode(cubeNode);
  }
}
