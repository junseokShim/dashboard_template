import { Typography } from "@material-ui/core";
import DetailSection from "./description";
import { Grid } from "@material-ui/core";

const ParentComponent = (props) => {
  if (props.selectedStock.length <= 0 || props.selectedStartDate.length <= 0 || props.selectedEndDate.length <= 0 ){
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
  return (
    <div>
      <DetailSection title={props.selectedStock}>
        <Grid item xs={12}>
            <Typography variant="body1" style={{ marginBottom: "1rem" }}>
              {props.selectedStock}에 대한 종가 및 이동평균선 정보입니다.
            </Typography>
            <Typography variant="body1" style={{ marginBottom: "1rem" }}>
              현재 종가 및 이동평균선 20, 60, 90 을 지원 중에 있습니다.
            </Typography>
        </Grid>

      </DetailSection>
    </div>
  );
};

export default ParentComponent;