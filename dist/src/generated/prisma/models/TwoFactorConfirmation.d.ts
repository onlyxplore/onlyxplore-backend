import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type TwoFactorConfirmationModel = runtime.Types.Result.DefaultSelection<Prisma.$TwoFactorConfirmationPayload>;
export type AggregateTwoFactorConfirmation = {
    _count: TwoFactorConfirmationCountAggregateOutputType | null;
    _min: TwoFactorConfirmationMinAggregateOutputType | null;
    _max: TwoFactorConfirmationMaxAggregateOutputType | null;
};
export type TwoFactorConfirmationMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
};
export type TwoFactorConfirmationMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
};
export type TwoFactorConfirmationCountAggregateOutputType = {
    id: number;
    userId: number;
    _all: number;
};
export type TwoFactorConfirmationMinAggregateInputType = {
    id?: true;
    userId?: true;
};
export type TwoFactorConfirmationMaxAggregateInputType = {
    id?: true;
    userId?: true;
};
export type TwoFactorConfirmationCountAggregateInputType = {
    id?: true;
    userId?: true;
    _all?: true;
};
export type TwoFactorConfirmationAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TwoFactorConfirmationWhereInput;
    orderBy?: Prisma.TwoFactorConfirmationOrderByWithRelationInput | Prisma.TwoFactorConfirmationOrderByWithRelationInput[];
    cursor?: Prisma.TwoFactorConfirmationWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | TwoFactorConfirmationCountAggregateInputType;
    _min?: TwoFactorConfirmationMinAggregateInputType;
    _max?: TwoFactorConfirmationMaxAggregateInputType;
};
export type GetTwoFactorConfirmationAggregateType<T extends TwoFactorConfirmationAggregateArgs> = {
    [P in keyof T & keyof AggregateTwoFactorConfirmation]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateTwoFactorConfirmation[P]> : Prisma.GetScalarType<T[P], AggregateTwoFactorConfirmation[P]>;
};
export type TwoFactorConfirmationGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TwoFactorConfirmationWhereInput;
    orderBy?: Prisma.TwoFactorConfirmationOrderByWithAggregationInput | Prisma.TwoFactorConfirmationOrderByWithAggregationInput[];
    by: Prisma.TwoFactorConfirmationScalarFieldEnum[] | Prisma.TwoFactorConfirmationScalarFieldEnum;
    having?: Prisma.TwoFactorConfirmationScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: TwoFactorConfirmationCountAggregateInputType | true;
    _min?: TwoFactorConfirmationMinAggregateInputType;
    _max?: TwoFactorConfirmationMaxAggregateInputType;
};
export type TwoFactorConfirmationGroupByOutputType = {
    id: string;
    userId: string;
    _count: TwoFactorConfirmationCountAggregateOutputType | null;
    _min: TwoFactorConfirmationMinAggregateOutputType | null;
    _max: TwoFactorConfirmationMaxAggregateOutputType | null;
};
export type GetTwoFactorConfirmationGroupByPayload<T extends TwoFactorConfirmationGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<TwoFactorConfirmationGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof TwoFactorConfirmationGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], TwoFactorConfirmationGroupByOutputType[P]> : Prisma.GetScalarType<T[P], TwoFactorConfirmationGroupByOutputType[P]>;
}>>;
export type TwoFactorConfirmationWhereInput = {
    AND?: Prisma.TwoFactorConfirmationWhereInput | Prisma.TwoFactorConfirmationWhereInput[];
    OR?: Prisma.TwoFactorConfirmationWhereInput[];
    NOT?: Prisma.TwoFactorConfirmationWhereInput | Prisma.TwoFactorConfirmationWhereInput[];
    id?: Prisma.StringFilter<"TwoFactorConfirmation"> | string;
    userId?: Prisma.StringFilter<"TwoFactorConfirmation"> | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type TwoFactorConfirmationOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
};
export type TwoFactorConfirmationWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    AND?: Prisma.TwoFactorConfirmationWhereInput | Prisma.TwoFactorConfirmationWhereInput[];
    OR?: Prisma.TwoFactorConfirmationWhereInput[];
    NOT?: Prisma.TwoFactorConfirmationWhereInput | Prisma.TwoFactorConfirmationWhereInput[];
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "userId">;
export type TwoFactorConfirmationOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    _count?: Prisma.TwoFactorConfirmationCountOrderByAggregateInput;
    _max?: Prisma.TwoFactorConfirmationMaxOrderByAggregateInput;
    _min?: Prisma.TwoFactorConfirmationMinOrderByAggregateInput;
};
export type TwoFactorConfirmationScalarWhereWithAggregatesInput = {
    AND?: Prisma.TwoFactorConfirmationScalarWhereWithAggregatesInput | Prisma.TwoFactorConfirmationScalarWhereWithAggregatesInput[];
    OR?: Prisma.TwoFactorConfirmationScalarWhereWithAggregatesInput[];
    NOT?: Prisma.TwoFactorConfirmationScalarWhereWithAggregatesInput | Prisma.TwoFactorConfirmationScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"TwoFactorConfirmation"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"TwoFactorConfirmation"> | string;
};
export type TwoFactorConfirmationCreateInput = {
    id?: string;
    user: Prisma.UserCreateNestedOneWithoutTwoFactorConfirmationInput;
};
export type TwoFactorConfirmationUncheckedCreateInput = {
    id?: string;
    userId: string;
};
export type TwoFactorConfirmationUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    user?: Prisma.UserUpdateOneRequiredWithoutTwoFactorConfirmationNestedInput;
};
export type TwoFactorConfirmationUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TwoFactorConfirmationCreateManyInput = {
    id?: string;
    userId: string;
};
export type TwoFactorConfirmationUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TwoFactorConfirmationUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TwoFactorConfirmationNullableScalarRelationFilter = {
    is?: Prisma.TwoFactorConfirmationWhereInput | null;
    isNot?: Prisma.TwoFactorConfirmationWhereInput | null;
};
export type TwoFactorConfirmationCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type TwoFactorConfirmationMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type TwoFactorConfirmationMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type TwoFactorConfirmationCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TwoFactorConfirmationCreateWithoutUserInput, Prisma.TwoFactorConfirmationUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.TwoFactorConfirmationCreateOrConnectWithoutUserInput;
    connect?: Prisma.TwoFactorConfirmationWhereUniqueInput;
};
export type TwoFactorConfirmationUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.TwoFactorConfirmationCreateWithoutUserInput, Prisma.TwoFactorConfirmationUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.TwoFactorConfirmationCreateOrConnectWithoutUserInput;
    connect?: Prisma.TwoFactorConfirmationWhereUniqueInput;
};
export type TwoFactorConfirmationUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TwoFactorConfirmationCreateWithoutUserInput, Prisma.TwoFactorConfirmationUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.TwoFactorConfirmationCreateOrConnectWithoutUserInput;
    upsert?: Prisma.TwoFactorConfirmationUpsertWithoutUserInput;
    disconnect?: Prisma.TwoFactorConfirmationWhereInput | boolean;
    delete?: Prisma.TwoFactorConfirmationWhereInput | boolean;
    connect?: Prisma.TwoFactorConfirmationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TwoFactorConfirmationUpdateToOneWithWhereWithoutUserInput, Prisma.TwoFactorConfirmationUpdateWithoutUserInput>, Prisma.TwoFactorConfirmationUncheckedUpdateWithoutUserInput>;
};
export type TwoFactorConfirmationUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.TwoFactorConfirmationCreateWithoutUserInput, Prisma.TwoFactorConfirmationUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.TwoFactorConfirmationCreateOrConnectWithoutUserInput;
    upsert?: Prisma.TwoFactorConfirmationUpsertWithoutUserInput;
    disconnect?: Prisma.TwoFactorConfirmationWhereInput | boolean;
    delete?: Prisma.TwoFactorConfirmationWhereInput | boolean;
    connect?: Prisma.TwoFactorConfirmationWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.TwoFactorConfirmationUpdateToOneWithWhereWithoutUserInput, Prisma.TwoFactorConfirmationUpdateWithoutUserInput>, Prisma.TwoFactorConfirmationUncheckedUpdateWithoutUserInput>;
};
export type TwoFactorConfirmationCreateWithoutUserInput = {
    id?: string;
};
export type TwoFactorConfirmationUncheckedCreateWithoutUserInput = {
    id?: string;
};
export type TwoFactorConfirmationCreateOrConnectWithoutUserInput = {
    where: Prisma.TwoFactorConfirmationWhereUniqueInput;
    create: Prisma.XOR<Prisma.TwoFactorConfirmationCreateWithoutUserInput, Prisma.TwoFactorConfirmationUncheckedCreateWithoutUserInput>;
};
export type TwoFactorConfirmationUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.TwoFactorConfirmationUpdateWithoutUserInput, Prisma.TwoFactorConfirmationUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.TwoFactorConfirmationCreateWithoutUserInput, Prisma.TwoFactorConfirmationUncheckedCreateWithoutUserInput>;
    where?: Prisma.TwoFactorConfirmationWhereInput;
};
export type TwoFactorConfirmationUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.TwoFactorConfirmationWhereInput;
    data: Prisma.XOR<Prisma.TwoFactorConfirmationUpdateWithoutUserInput, Prisma.TwoFactorConfirmationUncheckedUpdateWithoutUserInput>;
};
export type TwoFactorConfirmationUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TwoFactorConfirmationUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type TwoFactorConfirmationSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["twoFactorConfirmation"]>;
export type TwoFactorConfirmationSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["twoFactorConfirmation"]>;
export type TwoFactorConfirmationSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["twoFactorConfirmation"]>;
export type TwoFactorConfirmationSelectScalar = {
    id?: boolean;
    userId?: boolean;
};
export type TwoFactorConfirmationOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId", ExtArgs["result"]["twoFactorConfirmation"]>;
export type TwoFactorConfirmationInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TwoFactorConfirmationIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type TwoFactorConfirmationIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $TwoFactorConfirmationPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "TwoFactorConfirmation";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
    }, ExtArgs["result"]["twoFactorConfirmation"]>;
    composites: {};
};
export type TwoFactorConfirmationGetPayload<S extends boolean | null | undefined | TwoFactorConfirmationDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$TwoFactorConfirmationPayload, S>;
export type TwoFactorConfirmationCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<TwoFactorConfirmationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: TwoFactorConfirmationCountAggregateInputType | true;
};
export interface TwoFactorConfirmationDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['TwoFactorConfirmation'];
        meta: {
            name: 'TwoFactorConfirmation';
        };
    };
    findUnique<T extends TwoFactorConfirmationFindUniqueArgs>(args: Prisma.SelectSubset<T, TwoFactorConfirmationFindUniqueArgs<ExtArgs>>): Prisma.Prisma__TwoFactorConfirmationClient<runtime.Types.Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends TwoFactorConfirmationFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, TwoFactorConfirmationFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__TwoFactorConfirmationClient<runtime.Types.Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends TwoFactorConfirmationFindFirstArgs>(args?: Prisma.SelectSubset<T, TwoFactorConfirmationFindFirstArgs<ExtArgs>>): Prisma.Prisma__TwoFactorConfirmationClient<runtime.Types.Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends TwoFactorConfirmationFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, TwoFactorConfirmationFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__TwoFactorConfirmationClient<runtime.Types.Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends TwoFactorConfirmationFindManyArgs>(args?: Prisma.SelectSubset<T, TwoFactorConfirmationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends TwoFactorConfirmationCreateArgs>(args: Prisma.SelectSubset<T, TwoFactorConfirmationCreateArgs<ExtArgs>>): Prisma.Prisma__TwoFactorConfirmationClient<runtime.Types.Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends TwoFactorConfirmationCreateManyArgs>(args?: Prisma.SelectSubset<T, TwoFactorConfirmationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends TwoFactorConfirmationCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, TwoFactorConfirmationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends TwoFactorConfirmationDeleteArgs>(args: Prisma.SelectSubset<T, TwoFactorConfirmationDeleteArgs<ExtArgs>>): Prisma.Prisma__TwoFactorConfirmationClient<runtime.Types.Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends TwoFactorConfirmationUpdateArgs>(args: Prisma.SelectSubset<T, TwoFactorConfirmationUpdateArgs<ExtArgs>>): Prisma.Prisma__TwoFactorConfirmationClient<runtime.Types.Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends TwoFactorConfirmationDeleteManyArgs>(args?: Prisma.SelectSubset<T, TwoFactorConfirmationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends TwoFactorConfirmationUpdateManyArgs>(args: Prisma.SelectSubset<T, TwoFactorConfirmationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends TwoFactorConfirmationUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, TwoFactorConfirmationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends TwoFactorConfirmationUpsertArgs>(args: Prisma.SelectSubset<T, TwoFactorConfirmationUpsertArgs<ExtArgs>>): Prisma.Prisma__TwoFactorConfirmationClient<runtime.Types.Result.GetResult<Prisma.$TwoFactorConfirmationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends TwoFactorConfirmationCountArgs>(args?: Prisma.Subset<T, TwoFactorConfirmationCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], TwoFactorConfirmationCountAggregateOutputType> : number>;
    aggregate<T extends TwoFactorConfirmationAggregateArgs>(args: Prisma.Subset<T, TwoFactorConfirmationAggregateArgs>): Prisma.PrismaPromise<GetTwoFactorConfirmationAggregateType<T>>;
    groupBy<T extends TwoFactorConfirmationGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: TwoFactorConfirmationGroupByArgs['orderBy'];
    } : {
        orderBy?: TwoFactorConfirmationGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, TwoFactorConfirmationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTwoFactorConfirmationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: TwoFactorConfirmationFieldRefs;
}
export interface Prisma__TwoFactorConfirmationClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface TwoFactorConfirmationFieldRefs {
    readonly id: Prisma.FieldRef<"TwoFactorConfirmation", 'String'>;
    readonly userId: Prisma.FieldRef<"TwoFactorConfirmation", 'String'>;
}
export type TwoFactorConfirmationFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TwoFactorConfirmationSelect<ExtArgs> | null;
    omit?: Prisma.TwoFactorConfirmationOmit<ExtArgs> | null;
    include?: Prisma.TwoFactorConfirmationInclude<ExtArgs> | null;
    where: Prisma.TwoFactorConfirmationWhereUniqueInput;
};
export type TwoFactorConfirmationFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TwoFactorConfirmationSelect<ExtArgs> | null;
    omit?: Prisma.TwoFactorConfirmationOmit<ExtArgs> | null;
    include?: Prisma.TwoFactorConfirmationInclude<ExtArgs> | null;
    where: Prisma.TwoFactorConfirmationWhereUniqueInput;
};
export type TwoFactorConfirmationFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TwoFactorConfirmationSelect<ExtArgs> | null;
    omit?: Prisma.TwoFactorConfirmationOmit<ExtArgs> | null;
    include?: Prisma.TwoFactorConfirmationInclude<ExtArgs> | null;
    where?: Prisma.TwoFactorConfirmationWhereInput;
    orderBy?: Prisma.TwoFactorConfirmationOrderByWithRelationInput | Prisma.TwoFactorConfirmationOrderByWithRelationInput[];
    cursor?: Prisma.TwoFactorConfirmationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TwoFactorConfirmationScalarFieldEnum | Prisma.TwoFactorConfirmationScalarFieldEnum[];
};
export type TwoFactorConfirmationFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TwoFactorConfirmationSelect<ExtArgs> | null;
    omit?: Prisma.TwoFactorConfirmationOmit<ExtArgs> | null;
    include?: Prisma.TwoFactorConfirmationInclude<ExtArgs> | null;
    where?: Prisma.TwoFactorConfirmationWhereInput;
    orderBy?: Prisma.TwoFactorConfirmationOrderByWithRelationInput | Prisma.TwoFactorConfirmationOrderByWithRelationInput[];
    cursor?: Prisma.TwoFactorConfirmationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TwoFactorConfirmationScalarFieldEnum | Prisma.TwoFactorConfirmationScalarFieldEnum[];
};
export type TwoFactorConfirmationFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TwoFactorConfirmationSelect<ExtArgs> | null;
    omit?: Prisma.TwoFactorConfirmationOmit<ExtArgs> | null;
    include?: Prisma.TwoFactorConfirmationInclude<ExtArgs> | null;
    where?: Prisma.TwoFactorConfirmationWhereInput;
    orderBy?: Prisma.TwoFactorConfirmationOrderByWithRelationInput | Prisma.TwoFactorConfirmationOrderByWithRelationInput[];
    cursor?: Prisma.TwoFactorConfirmationWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TwoFactorConfirmationScalarFieldEnum | Prisma.TwoFactorConfirmationScalarFieldEnum[];
};
export type TwoFactorConfirmationCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TwoFactorConfirmationSelect<ExtArgs> | null;
    omit?: Prisma.TwoFactorConfirmationOmit<ExtArgs> | null;
    include?: Prisma.TwoFactorConfirmationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TwoFactorConfirmationCreateInput, Prisma.TwoFactorConfirmationUncheckedCreateInput>;
};
export type TwoFactorConfirmationCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.TwoFactorConfirmationCreateManyInput | Prisma.TwoFactorConfirmationCreateManyInput[];
    skipDuplicates?: boolean;
};
export type TwoFactorConfirmationCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TwoFactorConfirmationSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TwoFactorConfirmationOmit<ExtArgs> | null;
    data: Prisma.TwoFactorConfirmationCreateManyInput | Prisma.TwoFactorConfirmationCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.TwoFactorConfirmationIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type TwoFactorConfirmationUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TwoFactorConfirmationSelect<ExtArgs> | null;
    omit?: Prisma.TwoFactorConfirmationOmit<ExtArgs> | null;
    include?: Prisma.TwoFactorConfirmationInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TwoFactorConfirmationUpdateInput, Prisma.TwoFactorConfirmationUncheckedUpdateInput>;
    where: Prisma.TwoFactorConfirmationWhereUniqueInput;
};
export type TwoFactorConfirmationUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.TwoFactorConfirmationUpdateManyMutationInput, Prisma.TwoFactorConfirmationUncheckedUpdateManyInput>;
    where?: Prisma.TwoFactorConfirmationWhereInput;
    limit?: number;
};
export type TwoFactorConfirmationUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TwoFactorConfirmationSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.TwoFactorConfirmationOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.TwoFactorConfirmationUpdateManyMutationInput, Prisma.TwoFactorConfirmationUncheckedUpdateManyInput>;
    where?: Prisma.TwoFactorConfirmationWhereInput;
    limit?: number;
    include?: Prisma.TwoFactorConfirmationIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type TwoFactorConfirmationUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TwoFactorConfirmationSelect<ExtArgs> | null;
    omit?: Prisma.TwoFactorConfirmationOmit<ExtArgs> | null;
    include?: Prisma.TwoFactorConfirmationInclude<ExtArgs> | null;
    where: Prisma.TwoFactorConfirmationWhereUniqueInput;
    create: Prisma.XOR<Prisma.TwoFactorConfirmationCreateInput, Prisma.TwoFactorConfirmationUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.TwoFactorConfirmationUpdateInput, Prisma.TwoFactorConfirmationUncheckedUpdateInput>;
};
export type TwoFactorConfirmationDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TwoFactorConfirmationSelect<ExtArgs> | null;
    omit?: Prisma.TwoFactorConfirmationOmit<ExtArgs> | null;
    include?: Prisma.TwoFactorConfirmationInclude<ExtArgs> | null;
    where: Prisma.TwoFactorConfirmationWhereUniqueInput;
};
export type TwoFactorConfirmationDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TwoFactorConfirmationWhereInput;
    limit?: number;
};
export type TwoFactorConfirmationDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TwoFactorConfirmationSelect<ExtArgs> | null;
    omit?: Prisma.TwoFactorConfirmationOmit<ExtArgs> | null;
    include?: Prisma.TwoFactorConfirmationInclude<ExtArgs> | null;
};
