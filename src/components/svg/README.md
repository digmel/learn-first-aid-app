## Usage

Svg component wraps passed `uri` with `react-native-svg's` with `100% width` and `100% height` properties.

## Properties
* `uri` -  source url from database to render SVG.


## Example

```js 

import { Svg } from "@components";

// Inside functional component:

<View style={containerStyle}>
    <Svg uri={svgURL} />
</View>

```