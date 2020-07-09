import React from 'react'
import Grid from '@material-ui/core/Grid';

const University = (props) => {
    const renderDatas = props.data.length ? (
        props.data.map((item) => (
            <Grid item xs={4} sm={2} key={item.sys.id}>
                <div style={{ width: '100%', height: '100%' }}>
                    <div className="univ">{item.fields.name}</div>
                </div>
            </Grid>
        ))
    ) : (null)

    return (
        <div style={{ margin: '3em 0' }}>
            <Grid container spacing={3}>
                {renderDatas}
            </Grid>
        </div>
    );
}

export default University