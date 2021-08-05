import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import {CardBox,CardList} from './Card'

function Grid({ data ,type,props}) {
    return (
        <GridList style={{...props}} cellHeight='auto' spacing={32} className={useStyles.gridList} cols={type === 'Grid'?6:1}>
            {data.map(tile => (
                <GridListTile key={tile.name} cols={1}>
                    {
                        type === 'Grid'?
                        <CardBox data={tile}></CardBox>:
                        <CardList data={tile}></CardList>
                    }
                    
                </GridListTile>
            ))}
        </GridList>

    );
}
const useStyles = {
    gridList: {
        width: 100,
        height: 100,
    },
};
export default Grid;
