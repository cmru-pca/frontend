<template>
    <VContainer fluid>
        <VRow>
            <!-- <VCol cols="12" md="4">
                <VCard>
                    <VCardText>
                        <ClientOnly>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae ut repellat,
                            ullam saepe quos architecto nemo commodi doloribus pariatur, amet facilis expedita sint iusto
                            reiciendis nobis id alias explicabo?
                        </ClientOnly>
                    </VCardText>
                </VCard>
            </VCol>
            <VCol cols="12" md="4">
                <VCard>
                    <VCardText>
                        <ClientOnly>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae ut repellat,
                            ullam saepe quos architecto nemo commodi doloribus pariatur, amet facilis expedita sint iusto
                            reiciendis nobis id alias explicabo?
                        </ClientOnly>
                    </VCardText>
                </VCard>
            </VCol>
            <VCol cols="12" md="4">
                <VCard>
                    <VCardText>
                        <ClientOnly>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam repudiandae ut repellat,
                            ullam saepe quos architecto nemo commodi doloribus pariatur, amet facilis expedita sint iusto
                            reiciendis nobis id alias explicabo?
                        </ClientOnly>
                    </VCardText>
                </VCard>
            </VCol> -->
            <VCol cols="12">
                <VCard>
                    <VCardTitle class="text-center">123456</VCardTitle>
                    <VCardText class="text-uppercase">
                        <VDataTable :headers="tablesHeader" :items="response?.data" items-per-page="17">
                        </VDataTable>
                    </VCardText>
                </VCard>
            </VCol>

            <VCol cols="12">
                <VCard>
                    <VCardText>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius veniam vero distinctio
                        tenetur sunt molestias, saepe non iure nulla enim pariatur perspiciatis voluptate obcaecati amet
                        suscipit cum? Error, fugit iste.
                    </VCardText>
                </VCard>
            </VCol>

        </VRow>
    </VContainer>
</template>

<script setup lang="ts">
import { VDataTable } from "vuetify/labs/VDataTable";

const BASE_URL: string = "https://raw.githubusercontent.com/cmru-pca/scraper/main/data/2023/data.json?callback=json"

const tablesHeader: any = [
    {
        title: "ID",
        align: "start",
        sortable: true,
        key: 'id'
    }, {
        title: "NAME",
        sortable: false,
        key: 'name'
    }, {
        title: "MAJOR",
        sortable: false,
        key: 'major'
    }, {
        title: "LIKE",
        sortable: true,
        key: "like.value"
    },
    {
        title: "SHARE",
        sortable: true,
        key: "share.value"
    }, {
        title: "SCORE",
        sortable: true,
        key: 'point.value'
    }
]

const { data: response, error, pending } = await useFetch(BASE_URL, {
    server: false,
    transform: (response: string) => {
        return JSON.parse(response)
    }
})


</script>