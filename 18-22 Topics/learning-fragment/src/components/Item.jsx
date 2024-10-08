import styles from "./Item.module.css"; //to import CSS module

const Item = ({ foodItem, bought, handleBuyButton }) => { //destructing so using {items} where items is an array passed from App.jsx
  return (
    // to use CSS property from Item.module.css, USE: styles["name"]
    // class "list-group-item" is from bootstrap
    // React events use camelCase, e.g., "onClick" (like in JavaScript we have onclick, here we have onClick)
    // "active" class is taken from bootstrap which makes the list blue
    <li className={`${styles["kg-item"]} list-group-item ${bought && "active"}`}>  
      <span className={styles["kg-span"]}>{foodItem}</span>
      <button className={`${styles.button} btn btn-info`} onClick={handleBuyButton}> 
        Buy
      </button>
    </li>
  );
};

/** 
//we can write like this also
const Item = (props) => {
  return (
    <li className={`${styles["kg-item"]} list-group-item ${props.bought && "active"}`}>
      <span className={styles["kg-span"]}>{props.foodItem}</span>
      <button className={`${styles.button} btn btn-info`} onClick={props.handleBuyButton}>
        Buy
      </button>
    </li>
  );
};
*/
export default Item;


/* actual code taken from: https://getbootstrap.com/docs/4.0/components/list-group/

    <ul class="list-group">
      <li class="list-group-item active">Cras justo odio</li>
      <li class="list-group-item">Dapibus ac facilisis in</li>
      <li class="list-group-item">Morbi leo risus</li>
      <li class="list-group-item">Porta ac consectetur ac</li>
      <li class="list-group-item">Vestibulum at eros</li>
    </ul>
 */