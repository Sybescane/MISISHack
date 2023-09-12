import { Controller, Get, Query, } from "@nestjs/common";
import { UserService } from "./user/user.service";
import { PostService } from "./post/post.service";
import { HackathonService } from "./hackathon/hackathon.service";
import { ActivityService } from "./activity/activity.service";


@Controller()
export class AppController{
    constructor(private readonly userService: UserService,
        private readonly postService: PostService,
        private readonly hackService: HackathonService,
        private readonly activityService: ActivityService){}
    
    @Get('main')
    async mainpage(@Query('userId') userid: number){
        let user;
        if(userid != null){
            user = await this.userService.findOneById(userid)
        }
        let posts = await this.postService.findAll()
        let hacks = await this.hackService.findAll()
        let activities = await this.activityService.findAll()

        return {user, posts, hacks, activities}
    }
}

    