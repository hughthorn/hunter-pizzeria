import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import ShareIcon from '@material-ui/icons/Share';

import { loadMenu } from '../actions/menu';


const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 1500
    },
    icon: {
        color: 'rgba(255, 255, 255, 0.54)',
    },
});

class PizzaMenu extends Component {
    state = {
        open: false,
        selectedItem: {}
    };
    handleClickOpen = (item) => {
        console.log(item);
        this.setState({
            open: true,
            selectedItem: item
        });
    };
    handleClose = () => {
        this.setState({ open: false });
    };
    componentWillMount() {
        this.props.dispatch(loadMenu())
            .then(() => {
                console.log("menu loaded");
            });
    }
    render() {
        const { menu, classes } = this.props;
        return (
            <div className={classes.root}>
                <GridList cols={3} className={classes.gridList}>
                    <GridListTile key="Subheader" cols={3} style={{ height: 'auto' }}>
                        <ListSubheader component="div">Pizza Menu</ListSubheader>
                    </GridListTile>

                    {menu.items && menu.items.map(tile => (
                        <GridListTile rows={2} key={tile.id}>

                            <img src={tile.image} alt={tile.name} />
                            <GridListTileBar
                                title={tile.name}
                                subtitle={
                                    <span>Price: {tile.price} | Calories: {tile.calories}</span>
                                }
                                actionIcon={
                                    <div>
                                        <IconButton aria-label="Add to favorites">
                                            <FavoriteIcon color="action" />
                                        </IconButton>
                                        <IconButton aria-label="Share">
                                            <ShareIcon color="action" />
                                        </IconButton>
                                        <IconButton aria-label="Add to cart">
                                            <AddShoppingCart color="action" />
                                        </IconButton>
                                    </div>
                                }
                            />
                        </GridListTile>
                    ))}
                </GridList>

            </div>
        )
    }
}

PizzaMenu.propTypes = {
    classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => state;

export default withStyles(styles)(connect(mapStateToProps)(PizzaMenu));