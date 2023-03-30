import { Typography } from "@material-ui/core";
import DetailSection from "./description";
import { Grid } from "@material-ui/core";

const ParentComponent = () => {
  return (
    <div>
      <DetailSection title="LG Electronics">
        <Grid item xs={12}>
            <Typography variant="body1" style={{ marginBottom: "1rem" }}>
            LG전자(LG Electronics)는 LG그룹 계열 종합 전자제품 제조 기업으로 한국에선 삼성전자와 라이벌 관계에 있다. 가전, 그중에서도 백색가전으로 유명하며 전세계 가전업체중 2019년 기준 매출 및 영업이익 세계 1위를 달성하였다.
            </Typography>
            <Typography variant="body1" style={{ marginBottom: "1rem" }}>
            본사는 마포대교 인근의 서울특별시 영등포구 여의대로 128 (여의도동) LG트윈타워 서관에 위치해 있다.
            </Typography>
        </Grid>
      </DetailSection>
    </div>
  );
};

export default ParentComponent;