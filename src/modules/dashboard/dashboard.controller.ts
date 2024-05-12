import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { DashboardService } from "./dashoard.service";

@ApiTags('Dashboard')
@Controller({ 
    path: 'dashboard',
    version: '1'
})
export class DashboardController {

    constructor(private service: DashboardService) {}

    @Get()
    getDashboards() {
        return 'Fetching Dashboards';
    }
}