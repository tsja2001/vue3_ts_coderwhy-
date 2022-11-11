import { ref } from 'vue'
import type pageContent from '@/components/PageContent/page-content.vue'

export const usePageContent = () => {
  const pageContentRef =
    ref<InstanceType<typeof pageContent>>()

  const searchHandler = (query: any) => {
    pageContentRef.value?.fetchPageData(query)
  }
  const resetHandler = (query: any) => {
    pageContentRef.value?.fetchPageData(query)
  }

  return {
    pageContentRef,
    searchHandler,
    resetHandler,
  }
}
