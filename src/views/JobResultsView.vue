<template>
  <div class="flex flex-row flex-nowrap w-full">
    <job-filters-sidebar />
    <job-listings />
  </div>
</template>

<script>
import JobFiltersSidebar from '@/components/JobReasults/jobFilterSidebar/JobFiltersSidebar.vue'
import JobListings from '@/components/JobReasults/JobListings.vue'

export default {
  name: 'JobResultsView',
  components: { JobFiltersSidebar, JobListings },
}
</script>
