import { Typography } from "@material-ui/core";
import DetailSection from "./description";
import { Grid } from "@material-ui/core";

function parseJSON(str) {
  try {
    const json = JSON.parse(str);
    return json;
  } catch (err) {
    console.error(`Error parsing JSON ${err}`);
    return null;
  }
}

const ParentComponent = (props) => {
  if (props.selectedStock.length <= 0 || props.selectedStartDate.length <= 0 || props.selectedEndDate.length <= 0 || props.receivedData.length <=0){
    return (
      <div>
        <DetailSection title="주식 종목을 선택해 주세요">
          <Grid item xs={12}>
              <Typography variant="body1" style={{ marginBottom: "1rem" }}>
              주식 종목이 선택되지 않았습니다. 주식 종목을 선택해 주세요
              </Typography>
          </Grid>
        </DetailSection>
      </div>
    );
  }

  const pbr = parseJSON(props.receivedData).pbr
  const per = parseJSON(props.receivedData).per

  // console.log(received_datas.pbr, received_datas.per)
  return (
    <div>
      <DetailSection title={props.selectedStock}>
        <Grid item xs={12}>
            <Typography variant="body1" style={{ marginBottom: "1rem" }}>
              {props.selectedStock}의 종가 및 이동평균선(20, 60, 90 제공)
            </Typography>
            <Typography variant="body1" style={{ marginBottom: "1rem" }}>
              {props.selectedStock} PER : {per}
            </Typography>
            <Typography variant="body1" style={{ marginBottom: "1rem" }}>
              {props.selectedStock} PBR : {pbr} 
            </Typography>
        </Grid>

      </DetailSection>
    </div>
  );
};

export default ParentComponent;