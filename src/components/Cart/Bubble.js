import classes from './Bubble.module.css';

const Bubble = (props) => {

    return (
        <span className={classes.bubble}>
            {props.value > 9 ? '+9' : props.value}
        </span>
    );
};

export default Bubble;