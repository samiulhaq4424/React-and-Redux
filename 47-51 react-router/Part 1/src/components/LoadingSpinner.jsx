//to show loading state, it's a UI... 
//taken from bootstrap: https://getbootstrap.com/docs/5.3/components/spinners/
const LoadingSpinner = () => {
  return (
    <div className="d-flex justify-content-center myspinner"> {/* myspinner is added to class*/}
      <div className="spinner-border"role="status" style={{ width: "5rem", height: "5rem" }}> {/*styles defined here to increase size of spinner */}
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;

/* actual code:

        <div class="d-flex justify-content-center">
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
*/