## Usage

Icon component returns icon by `name` from `./assets/icons` directory, with default `width=40` and `height=40`.

## Properties
* `name` - name of the icon.
* `width` - width of the icon, (optional)
* `height` - height of the icon, (optional)


## Example

```js 

import { Icon } from "@components";

// Inside functional component:

<View style={containerStyle}>
      <Icon name="icon-name" />
</View>

```