import { observer } from "mobx-react-lite";
import { Grid } from "semantic-ui-react";
import { useEffect } from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";
import ActivityFilters from "./ActivityFilters";

export default observer(function ActivityDashboard() {
  const {activityStore} = useStore();
  const {loadActivities, activityRegistry} = activityStore;

  useEffect(() => {
    if (activityRegistry.size <= 1) loadActivities();
  }, [loadActivities, activityRegistry.size])

if (activityStore.loadingInitial) return <LoadingComponent content='Loading app...' />
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList />
      </Grid.Column>
      <Grid.Column width="6">
      <ActivityFilters />
      </Grid.Column>
    </Grid>
  );
})
