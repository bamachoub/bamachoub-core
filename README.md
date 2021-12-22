## Navigation and Footer


## Buttons

Sizes: Large, Medium, Small
Props: 
  shadow: num, 
  isFilled: bool, 
  isBordered: bool, 
  isDisabled: bool, 
  isClicked: bool,
  IconLeft: obj,
  IconRight: obj


## Cards

Styles: Hover
Props: ...


## Forms

### Fields

Sizes: Large
Props:
  title: str,
  label: str,
  warnings: str[],
  isDisabled: bool,
  isActive: bool,


### Input Stepper

Sizes: Large, Small


### Input Selector

Sizes: Large
Props: 
  title: str,
  isExpanded: bool,
  selectedItem: { index: num, value: obj },


## Chips

Sizes: Large, Small
Styles: Hover, Click
Props:
  label: str,
  isRound: bool,
  isRemovable: bool,


## Snackbars

Props: 
  variant: enum,
  label: enum,
  time: num,
  onUndo: func


## Breadcrumbs

Styles: Hover


> Hover: desktop = hover, mobile = onPressIn
> Click: desktop = click, mobile = onPressOut/onPress