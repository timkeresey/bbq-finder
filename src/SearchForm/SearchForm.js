import React, { Component } from 'react';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      stateUS: ''
    }
  }

  handelChange = (e) => {
    this.setState({[event.target.name]: event.target.value});
  }

  render() {
    return (
      <form className='search-form'>
        <label htmlFor='city'>City</label>
        <input
        className='search'
        id='city'
        value={this.state.city}
        onChange={e => this.handelChange(e)}
        />
        <label htmlFor='stateUS'>State</label>
        <input
        className='search'
        id='stateUS'
        list='states'
        onChange={e => this.handelChange(e)}
        />
        <datalist id='states'>
          <option value='AL' name='AL'/>
          <option value='AK' name='AK'/>
          <option value='AZ' name='AZ'/>
          <option value='AR' name='AR'/>
          <option value='CA' name='CA'/>
          <option value='CO' name='CO'/>
          <option value='CT' name='CT'/>
          <option value='DE' name='DE'/>
          <option value='FL' name='FL'/>
          <option value='GA' name='GA'/>
          <option value='HI' name='HI'/>
          <option value='ID' name='ID'/>
          <option value='IL' name='IL'/>
          <option value='IN' name='IN'/>
          <option value='IA' name='IA'/>
          <option value='KS' name='KS'/>
          <option value='KY' name='KY'/>
          <option value='LA' name='LA'/>
          <option value='ME' name='ME'/>
          <option value='MD' name='MD'/>
          <option value='MA' name='MA'/>
          <option value='MI' name='MI'/>
          <option value='MN' name='MN'/>
          <option value='MS' name='MS'/>
          <option value='MO' name='MO'/>
          <option value='MT' name='MT'/>
          <option value='NE' name='NE'/>
          <option value='NV' name='NV'/>
          <option value='NH' name='NH'/>
          <option value='NJ' name='NJ'/>
          <option value='NM' name='NM'/>
          <option value='NY' name='NY'/>
          <option value='NC' name='NC'/>
          <option value='ND' name='ND'/>
          <option value='OH' name='OH'/>
          <option value='OK' name='OK'/>
          <option value='OR' name='OR'/>
          <option value='PA' name='PA'/>
          <option value='RI' name='RI'/>
          <option value='SC' name='SC'/>
          <option value='SD' name='SD'/>
          <option value='TN' name='TN'/>
          <option value='TX' name='TX'/>
          <option value='UT' name='UT'/>
          <option value='VT' name='VT'/>
          <option value='VA' name='VA'/>
          <option value='WA' name='WA'/>
          <option value='WV' name='WV'/>
          <option value='WI' name='WI'/>
          <option value='WY' name='WY'/>
          <option value='DC' name='DC'/>
          <option value='AS' name='AS'/>
          <option value='GU' name='GU'/>
          <option value='MP' name='MP'/>
          <option value='PR' name='PR'/>
          <option value='VI' name='VI'/>
        </datalist>
        <input type="submit" value="Search"/>
      </form>
    )
  }
}

export default SearchForm;
