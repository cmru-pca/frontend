<template>
    <VContainer fluid>
        <VRow align="center" justify="center">
            <VCol v-for="item in response?.data" :key="item.id" cols="12" md="2">
                <VHover v-slot="{ isHovering, props }">
                    <VCard v-bind="props" :hover="isHovering" @Click="onSelectedImage(item)">
                        <VOverlay :model-value="isHovering" contained scrim="primary" />
                        <VImg aspect-ratio="16/9" :src="`${item.id}.jpg`" :lazy-src="`${item.id}.jpg`" cover>
                            <template v-slot:placeholder>
                                <VRow class="fill-height ma-0" align="center" justify="center">
                                    <VProgressCircular indeterminate color="grey-lighten-5" />
                                </VRow>
                            </template>
                        </VImg>
                    </VCard>
                </VHover>
            </VCol>
        </VRow>
    </VContainer>

    <div v-if="selectedImageData">
        <VBottomSheet v-model="useBottomSheets" inset>
            <VCard>
                <VToolbar color="primary">
                    <VToolbarTitle class="text-center text-uppercase">
                        Summary score
                    </VToolbarTitle>
                </VToolbar>

                <VCardText class="pa-3">
                    <VRow>
                        <VCol cols="12" md="4">
                            <ClientOnly>
                                <VCard>
                                    <VCardTitle>SCORE</VCardTitle>
                                    <VCardText class="pa-2">
                                        <apexchart height="100%"
                                            :options="onGenerateChartsLineOptions(selectedImageData?.id, selectedImageData?.point)"
                                            :series="onGenerateChartsLineData(selectedImageData?.id, selectedImageData?.point?.data)">
                                        </apexchart>
                                    </VCardText>
                                </VCard>
                            </ClientOnly>
                        </VCol>

                        <VCol cols="12" md="4">
                            <ClientOnly>
                                <VCard>
                                    <VCardTitle>LIKE</VCardTitle>
                                    <VCardText class="pa-2">
                                        <apexchart height="100%"
                                            :options="onGenerateChartsLineOptions(selectedImageData?.id, selectedImageData?.like)"
                                            :series="onGenerateChartsLineData(selectedImageData?.id, selectedImageData?.like?.data)">
                                        </apexchart>
                                    </VCardText>
                                </VCard>
                            </ClientOnly>
                        </VCol>

                        <VCol cols="12" md="4">
                            <ClientOnly>
                                <VCard>
                                    <VCardTitle>SHARE</VCardTitle>
                                    <VCardText class="pa-2">
                                        <apexchart height="100%"
                                            :options="onGenerateChartsLineOptions(selectedImageData?.id, selectedImageData?.share)"
                                            :series="onGenerateChartsLineData(selectedImageData?.id, selectedImageData?.share?.data)">
                                        </apexchart>
                                    </VCardText>
                                </VCard>
                            </ClientOnly>
                        </VCol>
                    </VRow>
                </VCardText>
            </VCard>
        </VBottomSheet>

    </div>
</template>

<script setup lang="ts">
import { VBottomSheet } from 'vuetify/labs/VBottomSheet'

const BASE_URL: string = "https://raw.githubusercontent.com/cmru-pca/scraper/main/data/2023/data.json?callback=json"

const useBottomSheets = ref(false)
const selectedImageData = ref()

const onSelectedImage = (item: any) => {
    useBottomSheets.value = !useBottomSheets.value
    selectedImageData.value = item
}

const onGenerateChartsLineOptions = (id: string, data: any) => {
    return {
        chart: {
            id: `line_${id}`,
            type: 'line',
            sparkline: {
                enabled: true
            },
        },
        stroke: {
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        tooltip: {
            fixed: {
                enabled: true,
                position: 'right'
            },
            x: {
                show: false
            }
        },
        title: {
            text: data.value,
            style: {
                fontSize: '26px'
            }
        },
        colors: ['#734CEA']
    }
}

const onGenerateChartsLineData = (id: string, data: any) => {
    return [
        {
            name: id,
            data: data
        }
    ]
}


const { data: response, error, pending } = await useFetch(BASE_URL, {
    server: false,
    transform: (response: string) => {
        return JSON.parse(response)
    }
})





</script>