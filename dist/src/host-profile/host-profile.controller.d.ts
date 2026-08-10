import { HostProfileService } from './host-profile.service';
import { UpdateHostProfileDto } from './dto/update-host-profile.dto';
export declare class HostProfileController {
    private readonly hostProfileService;
    constructor(hostProfileService: HostProfileService);
    getProfile(req: {
        user: {
            id: string;
        };
    }): Promise<{
        id: string;
        userId: string;
        username: string | null;
        firstName: string | null;
        lastName: string | null;
        profilePhoto: string | null;
        bio: string | null;
        hostCategory: string | null;
        hostTypes: string[];
        experienceTypes: string[];
        primaryLocation: string | null;
        destinations: string[];
        travelVibes: string[];
        groupSize: string | null;
        yearsExperience: string | null;
        tripsHosted: string | null;
        travelersHosted: string | null;
        instagram: string | null;
        youtube: string | null;
        website: string | null;
        linkedin: string | null;
        organizationName: string | null;
        logo: string | null;
        orgWebsite: string | null;
        orgDescription: string | null;
        teamSize: string | null;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    upsertProfile(req: {
        user: {
            id: string;
        };
    }, updateHostProfileDto: UpdateHostProfileDto): Promise<{
        id: string;
        userId: string;
        username: string | null;
        firstName: string | null;
        lastName: string | null;
        profilePhoto: string | null;
        bio: string | null;
        hostCategory: string | null;
        hostTypes: string[];
        experienceTypes: string[];
        primaryLocation: string | null;
        destinations: string[];
        travelVibes: string[];
        groupSize: string | null;
        yearsExperience: string | null;
        tripsHosted: string | null;
        travelersHosted: string | null;
        instagram: string | null;
        youtube: string | null;
        website: string | null;
        linkedin: string | null;
        organizationName: string | null;
        logo: string | null;
        orgWebsite: string | null;
        orgDescription: string | null;
        teamSize: string | null;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
