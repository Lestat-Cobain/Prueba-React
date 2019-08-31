import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

//import axios from 'axios';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
  }));

  const getData = data => {
    const { first } = data.name;
    const { last } = data.name;
    const { street } = data.location;
    const { city } = data.location;
    const { state } = data.location;
    const { postcode } = data.location;
    const  email   = data.email;
    
    const info = {
        first: first,
        last: last,
        street: street,
        city: city,
        state: state,
        postcode: postcode,
        email: email,
    }
    return info;
}

class AddressForm extends Component {

  constructor(){
        super();
        this.state = {
            posts: [],
        };
        console.log("constructor");
      }

    componentWillMount() {
        this.handleUpdateClick();
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("componentDidUpdate");
    }


    handleUpdateClick = () => {
        fetch('https://randomuser.me/api/').then( resolve => {
                return resolve.json();
            }).then(res => {
                const datos = getData(res.results[0]);
                this.setState({ 
                    posts: datos  
                });
                console.log(this.state.posts);
            });
      }

  render () {
    const { first, last, street, city, state, postcode, email } = this.state.posts;
      return (
        <div>
            <br/>
            <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Shipping address
            </Typography>
            <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
            <label>Name</label>
            <Typography variant="subtitle1" color="textSecondary">
            {first}
          </Typography>
            {/*<TextField
                required
                id="firstName"
                name="firstName"
                fullWidth
                autoComplete="fname"
            />*/}
            </Grid>
            <Grid item xs={12} sm={6}>
            <label>Last name</label>
            <Typography variant="subtitle1" color="textSecondary">
            {last}
          </Typography>
            {/*<TextField
                required
                id="lastName"
                name="lastName"
                label={last}
                fullWidth
                autoComplete="lname"
            />*/}
            </Grid>
            <Grid item xs={12}>
            <label>Street</label>
            <Typography variant="subtitle1" color="textSecondary">
            {street}
            </Typography>
            {/*<TextField
                required
                id="address1"
                name="address1"
                label={ street }
                fullWidth
                autoComplete="billing address-line1"
            />*/}
            </Grid>
            <Grid item xs={12}>
            <label>Street</label>
            <Typography variant="subtitle1" color="textSecondary">
            {street}
            </Typography>
            {/*<TextField
                id="address2"
                name="address2"
                label={ street }
                fullWidth
                autoComplete="billing address-line2"
            />*/}
            </Grid>
            <Grid item xs={12} sm={6}>
            <label>City</label>
            <Typography variant="subtitle1" color="textSecondary">
            {city}
            </Typography>
            {/*<TextField
                required
                id="city"
                name="city"
                label={ city }
                fullWidth
                autoComplete="billing address-level2"
            />*/}
            </Grid>
            <Grid item xs={12} sm={6}>
            <label>State</label>
            <Typography variant="subtitle1" color="textSecondary">
            {state}
            </Typography>
            {/*<TextField id="state" name="state" label={ state } fullWidth />*/}
            </Grid>
            <Grid item xs={12} sm={6}>
            <label>Postcode</label>
            <Typography variant="subtitle1" color="textSecondary">
            {postcode}
            </Typography>
            {/*<TextField
                required
                id="zip"
                name="zip"
                label={ postcode }
                fullWidth
                autoComplete="billing postal-code"
            />*/}
            </Grid>
            <Grid item xs={12} sm={6}>
            <label>Email</label>
            <Typography variant="subtitle1" color="textSecondary">
            {email}
            </Typography>
            {/*<TextField
                required
                id="cell"
                name="cell"
                type="text"
                label={ email }
                fullWidth
                autoComplete="number"
            />*/}
            </Grid>
            <Grid>
            <Button variant="contained" color="secondary" className={useStyles.button} onClick={() => this.handleUpdateClick()}>
            Modificar
            </Button>
            </Grid>
        </Grid>
        </React.Fragment>
        </div>
    )
  }
}

export default AddressForm;