import slugify from 'slugify';

export const slugifyModel = async (att_first?: string, att_last?: string): Promise<string | undefined> => {
    if(!att_first && !att_last) return undefined;
    const full = `${att_first || ' '} ${att_last || ' '}`.trim();
    return slugify(full, {
        lower: true,   
        strict: true,  
        locale: 'vi',
    });
}