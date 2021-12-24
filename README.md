# Bamachoub Core Library

Includes assets, core functionality, required hooks and most used values for bamachoub web and mobile apps.  
<br/>


## Updating package

### How to test updated package locally

1. Clone current repo to your pc
2. Update the code or assets as you wish
3. Run ```npm link``` to link @bamachoub/bamachoub-core to your npm locally
4. In your project dir run ```npm link @bamachoub/bamachoub-core``` to update package
5. Test changes but remember that these changes are local 
6. To publish npm package read next section


### How to publish changes to package

1. Make required changes to the repo
2. Change **package version** following semver rules mentioned in next section
3. Make sure you are added as a developer to **bamachoub org** in npm website
4. Run ```npm login``` then login with your npm account
5. Run ```npm publish --access public```
6. Now you can see changes [here](https://www.npmjs.com/package/@bamachoub/core)


### Semantic versioning in npm

The version value is a combination of 3 digits separated by dot operator. Let’s say the version is a.b.c

    First value (a in a.b.c) specifies the major version of the package — It means this version has Major code changes and it might contain breaking API changes.
    Second value (b in a.b.c) specifies the minor version which contains minor changes but will not contain breaking API changes.
    Third value (c in a.b.c) specifies the patch version which usually contains bug fixes.

Lets consider you just added a readme.md file which is not an API change so you can increment the patch version which is the last digit by 1.

So change the version inside package.json file from 1.0.0 to 1.0.1 and run the npm publish command again.

## Values

Exists of colors, enums, layout values, quantities and share strings.  
<br/>

## Components
Reference for component props and attrs.  
<br/>

### Buttons

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


### Cards

```
Styles: Hover
Props: ...
```


### Forms

```
...
```


#### Fields

```
Sizes: Large  
Props:  
  title: str,  
  label: str,  
  warnings: str[],
  isDisabled: bool,
  isActive: bool,
```


#### Input Stepper

```
Sizes: Large, Small
```


#### Input Selector  

```
Sizes: Large
Props: 
  title: str,
  isExpanded: bool,
  selectedItem: { index: num, value: obj },
```


### Chips

```
Sizes: Large, Small
Styles: Hover, Click
Props:
  label: str,
  isRound: bool,
  isRemovable: bool,
```


### Snackbars

```
Props: 
  variant: enum,
  label: enum,
  time: num,
  onUndo: func
```

### Breadcrumbs

```
Styles: Hover
```

<br/>

## Tips

> Hover is equal to **hover** in **desktop** and **onPressIn** in **mobile**  
> Click is equal to **onClick** in **desktop** and **onPressOut/onPress** in **mobile**
