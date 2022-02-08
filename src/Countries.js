import React from 'react';
import { connect } from 'react-redux';
import { getCountries } from './store/countries.actions.js';

function Countries(props) {
  console.log(props);
  return (
    <div>
      <h3> Get Countries from (API)</h3>
      <button
        onClick={() => {
          props.getCountries();
        }}
      >
        Get Counties
      </button>
      <h3>Countries Here</h3>
      <div class="row">
        <div class="card-deck">
          {props.countries.map((c, i) => {
            return (
              <div class="col-3" key={i}>
                <div class="card">
                  <div class="card-body text-center">
                    <img class="card-img-top" src={c.flags.png} alt="Card" />
                    <div class="card-body">
                      <h4 class="card-title">{c.name.common}</h4>
                      <p class="card-text">{c.subregion}</p>
                      <button>See Profile</button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return {
    getCountries: () => {
      dispatch(getCountries());
    },
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Countries);
