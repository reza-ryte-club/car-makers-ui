
<script>
import { AgGridVue } from 'ag-grid-vue3'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import axios from 'axios'
import api from '../api'
import MakeFilter from './MakeFilter.vue'

export default {
    name: 'App',
    components: {
        'ag-grid-vue': AgGridVue,
        MakeFilter
    },
    data() {
        return {
            loading: false,
            columnDefs: [
                { 
                    field: 'make',
                    filter: 'MakeFilter', 
                    filterParams: {
                         title: 'hola',
                        filterChangedCallback: async (data)=>{
                            console.log('Hello')
                            console.log('data',data)
                            await this.getCarByMaker(data)
                        }
                    } 
                },
                { field: 'model' },
                { field: 'price' }
            ],
            rowData: [],
            gridApi: null,
            columnApi: null,
            defaultColDef: {
                flex: 1,
                minWidth: 90,
                resizable: true,
            },
            rowModelType: null,
            // paginationPageSize: null,
            cacheBlockSize: null,
            paginationAutoPageSize: true,
            

        }
    },
    created() {
        this.rowModelType = 'serverSide';
        // this.paginationPageSize = 10;
        this.cacheBlockSize = 10;
        
    },
    methods: {
        async onGridReady(params) {
            const allCars = await api.getAllCars()
            this.setRowData(allCars.data)
        },
        async getCarByMaker(data) {
            const carsByMaker = await api.getCarByMaker(data)
            console.log('carsByMaker', carsByMaker)
            console.log('carsByMaker.data', carsByMaker.data)
            this.setRowData(carsByMaker.data)
        },
        setRowData(data) {
            this.rowData = data;
        }
    },
    mounted() {
        // this.setRowData()
    }
}


</script>
<style scoped>

</style>

<template>
    <div v-if="loading" class="loading">Loading...</div>
    <div v-if="!loading" class="loading">
        <ag-grid-vue style="width: 70vw; height: 600px; 
            margin: 10px auto;" class="ag-theme-alpine" 
            :columnDefs="columnDefs" 
            :rowData="rowData"
            @grid-ready="onGridReady" 
            :defaultColDef="defaultColDef" 
            :pagination="true"
            :paginationPageSize="paginationPageSize" 
            :cacheBlockSize="cacheBlockSize" 
            :animateRows="true"
            paginationAutoPageSize={true}
            
            >
        </ag-grid-vue>


    </div>
</template>
