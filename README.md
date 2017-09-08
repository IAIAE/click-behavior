# click-behavior
click-behavior wrap function for onClick.


#usage
two parameters: `clickBehavoir(config, handler)`

```javascript
import {clickBehavior} from 'click-behavior'

let clickHandler = (e)=>{
    console.info(e)
}

///before
<div onClick={clickHandler}></div>

///now
<div onClick={clickBehavior({interval: 1000}, clickHandler)}></div>

```

## options

```javascript
clickBehavior({
    interval: 1000 //cannot click until 1000ms after
}, handler);

// or
clickBehavior({
    cb: true //cannot click until finish is called
}, (e, finish)=>{
    console.info(e);
    finish()
});


```