import React from "react";
import Grid from "@material-ui/core/Grid";

const Companies = (props) => {
  const renderDatas = props.data.length
    ? props.data.map((item) => (
        <Grid item xs={12} sm={4} key={item.sys.id}>
          <div style={{ width: "100%", height: "100%" }}>
            <a href={item.fields.url} style={{ textDecoration: "none" }}>
              <img
                style={{ width: "100%", height: "80px", objectFit: "contain" }}
                alt="complex"
                src={item.fields.image.fields.file.url}
              />
              <div className="companyTitle1" style={{textAlign:'center'}}>{item.fields.name}</div>
              <div className="type" style={{textAlign:'center'}}>業種</div>
              <div className="recruitment" style={{textAlign:'center'}}>{item.fields.type}</div>

              <div className="type" style={{textAlign:'center'}}>募集職種</div>
              <div className="recruitment" style={{textAlign:'center'}}>{item.fields.recruitment}</div>

              <div className="type" style={{textAlign:'center'}}>企業紹介</div>
              <div className="companyDesc1" style={{textAlign:'center'}}>{item.fields.description}</div>
            </a>
          </div>
        </Grid>
      ))
    : null;

  return (
    <div style={{ margin: "3em 0" }}>
      <Grid container spacing={3}>
        {renderDatas}
      </Grid>
    </div>
  );
};

export default Companies;
