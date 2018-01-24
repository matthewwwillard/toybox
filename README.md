# ToyBox
The easy to use Storage Engine written Typescript!

# How to Use
Simply install ToyBox via NPM. After that, import it into your project!
Example:
```javascript
import {ToyBox} from "ToyBox"

let toyBox = new ToyBox({uploadDir:__dirname + '/localUploads'});

console.log(toyBox.engine('local'));
```
