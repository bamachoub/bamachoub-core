# Bamachoub Core Library

Includes assets, core functionality, required hooks and most used values for bamachoub web and mobile apps.


## Buttons

```
Sizes: Large, Medium, Small
Props:
  shadow: num,
  isFilled: bool,
  isBordered: bool,
  isDisabled: bool,
  isClicked: bool,
  IconLeft: obj,
  IconRight: obj
```


## Cards

```
Styles: Hover
Props: ...
```


## Forms

```
...
```


### Fields

```
Sizes: Large  
Props:  
  title: str,  
  label: str,  
  warnings: str[],
  isDisabled: bool,
  isActive: bool,
```


### Input Stepper

```
Sizes: Large, Small
```


### Input Selector  

```
Sizes: Large
Props: 
  title: str,
  isExpanded: bool,
  selectedItem: { index: num, value: obj },
```


## Chips

```
Sizes: Large, Small
Styles: Hover, Click
Props:
  label: str,
  isRound: bool,
  isRemovable: bool,
```


## Snackbars

```
Props: 
  variant: enum,
  label: enum,
  time: num,
  onUndo: func
```

## Breadcrumbs

```
Styles: Hover
```


# Tips

> Hover is equal to **hover** in **desktop** and **onPressIn** in **mobile**  
> Click is equal to **onClick** in **desktop** and **onPressOut/onPress** in **mobile**