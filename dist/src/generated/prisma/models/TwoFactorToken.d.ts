import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type TwoFactorTokenModel = runtime.Types.Result.DefaultSelection<Prisma.$TwoFactorTokenPayload>;
export type AggregateTwoFactorToken = {
    _count: TwoFactorTokenCountAggregateOutputType | null;
    _min: TwoFactorTokenMinAggregateOutputType | null;
    _max: TwoFactorTokenMaxAggregateOutputType | null;
};
export type TwoFactorTokenMinAggregateOutputType = {
    id: string | null;
    email: string | null;
    token: string | null;
    expires: Date | null;
};
export type TwoFactorTokenMaxAggregateOutputType = {
    id: string | null;
    email: string | null;
    token: string | null;
    expires: Date | null;
};
export type TwoFactorTokenCountAggregateOutputType = {
    id: number;
    email: number;
    token: number;
    expires: number;
    _all: number;
};
export type TwoFactorTokenMinAggregateInputType = {
    id?: true;
    email?: true;
    token?: true;
    expires?: true;
};
export type TwoFactorTokenMaxAggregateInputType = {
    id?: true;
    email?: true;
    token?: true;
    expires?: true;
};
export type TwoFactorTokenCountAggregateInputType = {
    id?: true;
    email?: true;
    token?: true;
    expires?: true;
    _all?: true;
};
export type TwoFactorTokenAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TwoFactorTokenWhereInput;
    orderBy?: Prisma.TwoFactorTokenOrderByWithRelationInput | Prisma.TwoFactorTokenOrderByWithRelationInput[];
    cursor?: Prisma.TwoFactorTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TwoFactorTokenCountAggregateInputType;
    _min?: TwoFactorTokenMinAggregateInputType;
    _max?: TwoFactorTokenMaxAggregateInputType;
};
export type GetTwoFactorTokenAggregateType<T extends TwoFactorTokenAggregateArgs> = {
    [P in keyof T & keyof AggregateTwoFactorToken]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTwoFactorToken[P]> : Prisma.GetScalarType<T[P], AggregateTwoFactorToken[P]>;
};
export type TwoFactorTokenGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TwoFactorTokenWhereInput;
    orderBy?: Prisma.TwoFactorTokenOrderByWithAggregationInput | Prisma.TwoFactorTokenOrderByWithAggregationInput[];
    by: Prisma.TwoFactorTokenScalarFieldEnum[] | Prisma.TwoFactorTokenScalarFieldEnum;
    having?: Prisma.TwoFactorTokenScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TwoFactorTokenCountAggregateInputType | true;
    _min?: TwoFactorTokenMinAggregateInputType;
    _max?: TwoFactorTokenMaxAggregateInputType;
};
export type TwoFactorTokenGroupByOutputType = {
    id: string;
    email: string;
    token: string;
    expires: Date;
    _count: TwoFactorTokenCountAggregateOutputType | null;
    _min: TwoFactorTokenMinAggregateOutputType | null;
    _max: TwoFactorTokenMaxAggregateOutputType | null;
};
export type GetTwoFactorTokenGroupByPayload<T extends TwoFactorTokenGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TwoFactorTokenGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TwoFactorTokenGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TwoFactorTokenGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TwoFactorTokenGroupByOutputType[P]>;
}>>;
export type TwoFactorTokenWhereInput = {
    AND?: Prisma.TwoFactorTokenWhereInput | Prisma.TwoFactorTokenWhereInput[];
    OR?: Prisma.TwoFactorTokenWhereInput[];
    NOT?: Prisma.TwoFactorTokenWhereInput | Prisma.TwoFactorTokenWhereInput[];
    id?: Prisma.StringFilter<"TwoFactorToken"> | string;
    email?: Prisma.StringFilter<"TwoFactorToken"> | string;
    token?: Prisma.StringFilter<"TwoFactorToken"> | string;
    expires?: Prisma.DateTimeFilter<"TwoFactorToken"> | Date | string;
};
export type TwoFactorTokenOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    expires?: Prisma.SortOrder;
};
export type TwoFactorTokenWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    token?: string;
    email_token?: Prisma.TwoFactorTokenEmailTokenCompoundUniqueInput;
    AND?: Prisma.TwoFactorTokenWhereInput | Prisma.TwoFactorTokenWhereInput[];
    OR?: Prisma.TwoFactorTokenWhereInput[];
    NOT?: Prisma.TwoFactorTokenWhereInput | Prisma.TwoFactorTokenWhereInput[];
    email?: Prisma.StringFilter<"TwoFactorToken"> | string;
    expires?: Prisma.DateTimeFilter<"TwoFactorToken"> | Date | string;
}, "id" | "token" | "email_token">;
export type TwoFactorTokenOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    expires?: Prisma.SortOrder;
    _count?: Prisma.TwoFactorTokenCountOrderByAggregateInput;
    _max?: Prisma.TwoFactorTokenMaxOrderByAggregateInput;
    _min?: Prisma.TwoFactorTokenMinOrderByAggregateInput;
};
export type TwoFactorTokenScalarWhereWithAggregatesInput = {
    AND?: Prisma.TwoFactorTokenScalarWhereWithAggregatesInput | Prisma.TwoFactorTokenScalarWhereWithAggregatesInput[];
    OR?: Prisma.TwoFactorTokenScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TwoFactorTokenScalarWhereWithAggregatesInput | Prisma.TwoFactorTokenScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TwoFactorToken"> | string;
    email?: Prisma.StringWithAggregatesFilter<"TwoFactorToken"> | string;
    token?: Prisma.StringWithAggregatesFilter<"TwoFactorToken"> | string;
    expires?: Prisma.DateTimeWithAggregatesFilter<"TwoFactorToken"> | Date | string;
};
export type TwoFactorTokenCreateInput = {
    id?: string;
    email: string;
    token: string;
    expires: Date | string;
};
export type TwoFactorTokenUncheckedCreateInput = {
    id?: string;
    email: string;
    token: string;
    expires: Date | string;
};
export type TwoFactorTokenUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expires?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TwoFactorTokenUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expires?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TwoFactorTokenCreateManyInput = {
    id?: string;
    email: string;
    token: string;
    expires: Date | string;
};
export type TwoFactorTokenUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expires?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TwoFactorTokenUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    token?: Prisma.StringFieldUpdateOperationsInput | string;
    expires?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type TwoFactorTokenEmailTokenCompoundUniqueInput = {
    email: string;
    token: string;
};
export type TwoFactorTokenCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    expires?: Prisma.SortOrder;
};
export type TwoFactorTokenMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    expires?: Prisma.SortOrder;
};
export type TwoFactorTokenMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    token?: Prisma.SortOrder;
    expires?: Prisma.SortOrder;
};
export type TwoFactorTokenSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    token?: boolean;
    expires?: boolean;
}, ExtArgs["result"]["twoFactorToken"]>;
export type TwoFactorTokenSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    token?: boolean;
    expires?: boolean;
}, ExtArgs["result"]["twoFactorToken"]>;
export type TwoFactorTokenSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    email?: boolean;
    token?: boolean;
    expires?: boolean;
}, ExtArgs["result"]["twoFactorToken"]>;
export type TwoFactorTokenSelectScalar = {
    id?: boolean;
    email?: boolean;
    token?: boolean;
    expires?: boolean;
};
export type TwoFactorTokenOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "email" | "token" | "expires", ExtArgs["result"]["twoFactorToken"]>;
export type $TwoFactorTokenPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TwoFactorToken";
    objects: {};
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        email: string;
        token: string;
        expires: Date;
    }, ExtArgs["result"]["twoFactorToken"]>;
    composites: {};
};
export type TwoFactorTokenGetPayload<S extends boolean | null | undefined | TwoFactorTokenDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TwoFactorTokenPayload, S>;
export type TwoFactorTokenCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TwoFactorTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TwoFactorTokenCountAggregateInputType | true;
};
export interface TwoFactorTokenDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TwoFactorToken'];
        meta: {
            name: 'TwoFactorToken';
        };
    };
    findUnique<T extends TwoFactorTokenFindUniqueArgs>(args: Prisma.SelectSubset<T, TwoFactorTokenFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TwoFactorTokenClient<runtime.Types.Result.GetResult<Prisma.$TwoFactorTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TwoFactorTokenFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TwoFactorTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TwoFactorTokenClient<runtime.Types.Result.GetResult<Prisma.$TwoFactorTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TwoFactorTokenFindFirstArgs>(args?: Prisma.SelectSubset<T, TwoFactorTokenFindFirstArgs<ExtArgs>>): Prisma.Prisma__TwoFactorTokenClient<runtime.Types.Result.GetResult<Prisma.$TwoFactorTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TwoFactorTokenFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TwoFactorTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TwoFactorTokenClient<runtime.Types.Result.GetResult<Prisma.$TwoFactorTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TwoFactorTokenFindManyArgs>(args?: Prisma.SelectSubset<T, TwoFactorTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TwoFactorTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TwoFactorTokenCreateArgs>(args: Prisma.SelectSubset<T, TwoFactorTokenCreateArgs<ExtArgs>>): Prisma.Prisma__TwoFactorTokenClient<runtime.Types.Result.GetResult<Prisma.$TwoFactorTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TwoFactorTokenCreateManyArgs>(args?: Prisma.SelectSubset<T, TwoFactorTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TwoFactorTokenCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TwoFactorTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TwoFactorTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TwoFactorTokenDeleteArgs>(args: Prisma.SelectSubset<T, TwoFactorTokenDeleteArgs<ExtArgs>>): Prisma.Prisma__TwoFactorTokenClient<runtime.Types.Result.GetResult<Prisma.$TwoFactorTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TwoFactorTokenUpdateArgs>(args: Prisma.SelectSubset<T, TwoFactorTokenUpdateArgs<ExtArgs>>): Prisma.Prisma__TwoFactorTokenClient<runtime.Types.Result.GetResult<Prisma.$TwoFactorTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TwoFactorTokenDeleteManyArgs>(args?: Prisma.SelectSubset<T, TwoFactorTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TwoFactorTokenUpdateManyArgs>(args: Prisma.SelectSubset<T, TwoFactorTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TwoFactorTokenUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TwoFactorTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TwoFactorTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TwoFactorTokenUpsertArgs>(args: Prisma.SelectSubset<T, TwoFactorTokenUpsertArgs<ExtArgs>>): Prisma.Prisma__TwoFactorTokenClient<runtime.Types.Result.GetResult<Prisma.$TwoFactorTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TwoFactorTokenCountArgs>(args?: Prisma.Subset<T, TwoFactorTokenCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TwoFactorTokenCountAggregateOutputType> : number>;
    aggregate<T extends TwoFactorTokenAggregateArgs>(args: Prisma.Subset<T, TwoFactorTokenAggregateArgs>): Prisma.PrismaPromise<GetTwoFactorTokenAggregateType<T>>;
    groupBy<T extends TwoFactorTokenGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TwoFactorTokenGroupByArgs['orderBy'];
    } : {
        orderBy?: TwoFactorTokenGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TwoFactorTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTwoFactorTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TwoFactorTokenFieldRefs;
}
export interface Prisma__TwoFactorTokenClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TwoFactorTokenFieldRefs {
    readonly id: Prisma.FieldRef<"TwoFactorToken", 'String'>;
    readonly email: Prisma.FieldRef<"TwoFactorToken", 'String'>;
    readonly token: Prisma.FieldRef<"TwoFactorToken", 'String'>;
    readonly expires: Prisma.FieldRef<"TwoFactorToken", 'DateTime'>;
}
export type TwoFactorTokenFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TwoFactorTokenSelect<ExtArgs> | null;
    omit?: Prisma.TwoFactorTokenOmit<ExtArgs> | null;
    where: Prisma.TwoFactorTokenWhereUniqueInput;
};
export type TwoFactorTokenFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TwoFactorTokenSelect<ExtArgs> | null;
    omit?: Prisma.TwoFactorTokenOmit<ExtArgs> | null;
    where: Prisma.TwoFactorTokenWhereUniqueInput;
};
export type TwoFactorTokenFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TwoFactorTokenSelect<ExtArgs> | null;
    omit?: Prisma.TwoFactorTokenOmit<ExtArgs> | null;
    where?: Prisma.TwoFactorTokenWhereInput;
    orderBy?: Prisma.TwoFactorTokenOrderByWithRelationInput | Prisma.TwoFactorTokenOrderByWithRelationInput[];
    cursor?: Prisma.TwoFactorTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TwoFactorTokenScalarFieldEnum | Prisma.TwoFactorTokenScalarFieldEnum[];
};
export type TwoFactorTokenFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TwoFactorTokenSelect<ExtArgs> | null;
    omit?: Prisma.TwoFactorTokenOmit<ExtArgs> | null;
    where?: Prisma.TwoFactorTokenWhereInput;
    orderBy?: Prisma.TwoFactorTokenOrderByWithRelationInput | Prisma.TwoFactorTokenOrderByWithRelationInput[];
    cursor?: Prisma.TwoFactorTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TwoFactorTokenScalarFieldEnum | Prisma.TwoFactorTokenScalarFieldEnum[];
};
export type TwoFactorTokenFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TwoFactorTokenSelect<ExtArgs> | null;
    omit?: Prisma.TwoFactorTokenOmit<ExtArgs> | null;
    where?: Prisma.TwoFactorTokenWhereInput;
    orderBy?: Prisma.TwoFactorTokenOrderByWithRelationInput | Prisma.TwoFactorTokenOrderByWithRelationInput[];
    cursor?: Prisma.TwoFactorTokenWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TwoFactorTokenScalarFieldEnum | Prisma.TwoFactorTokenScalarFieldEnum[];
};
export type TwoFactorTokenCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TwoFactorTokenSelect<ExtArgs> | null;
    omit?: Prisma.TwoFactorTokenOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TwoFactorTokenCreateInput, Prisma.TwoFactorTokenUncheckedCreateInput>;
};
export type TwoFactorTokenCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TwoFactorTokenCreateManyInput | Prisma.TwoFactorTokenCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TwoFactorTokenCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TwoFactorTokenSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TwoFactorTokenOmit<ExtArgs> | null;
    data: Prisma.TwoFactorTokenCreateManyInput | Prisma.TwoFactorTokenCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TwoFactorTokenUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TwoFactorTokenSelect<ExtArgs> | null;
    omit?: Prisma.TwoFactorTokenOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TwoFactorTokenUpdateInput, Prisma.TwoFactorTokenUncheckedUpdateInput>;
    where: Prisma.TwoFactorTokenWhereUniqueInput;
};
export type TwoFactorTokenUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TwoFactorTokenUpdateManyMutationInput, Prisma.TwoFactorTokenUncheckedUpdateManyInput>;
    where?: Prisma.TwoFactorTokenWhereInput;
    limit?: number;
};
export type TwoFactorTokenUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TwoFactorTokenSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TwoFactorTokenOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TwoFactorTokenUpdateManyMutationInput, Prisma.TwoFactorTokenUncheckedUpdateManyInput>;
    where?: Prisma.TwoFactorTokenWhereInput;
    limit?: number;
};
export type TwoFactorTokenUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TwoFactorTokenSelect<ExtArgs> | null;
    omit?: Prisma.TwoFactorTokenOmit<ExtArgs> | null;
    where: Prisma.TwoFactorTokenWhereUniqueInput;
    create: Prisma.XOR<Prisma.TwoFactorTokenCreateInput, Prisma.TwoFactorTokenUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TwoFactorTokenUpdateInput, Prisma.TwoFactorTokenUncheckedUpdateInput>;
};
export type TwoFactorTokenDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TwoFactorTokenSelect<ExtArgs> | null;
    omit?: Prisma.TwoFactorTokenOmit<ExtArgs> | null;
    where: Prisma.TwoFactorTokenWhereUniqueInput;
};
export type TwoFactorTokenDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TwoFactorTokenWhereInput;
    limit?: number;
};
export type TwoFactorTokenDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TwoFactorTokenSelect<ExtArgs> | null;
    omit?: Prisma.TwoFactorTokenOmit<ExtArgs> | null;
};
