import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutCommentInput } from "../inputs/UserCreateOrConnectWithoutCommentInput";
import { UserCreateWithoutCommentInput } from "../inputs/UserCreateWithoutCommentInput";
import { UserUpdateWithoutCommentInput } from "../inputs/UserUpdateWithoutCommentInput";
import { UserUpsertWithoutCommentInput } from "../inputs/UserUpsertWithoutCommentInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutCommentInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutCommentInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCommentInput, {
    nullable: true
  })
  create?: UserCreateWithoutCommentInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCommentInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCommentInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutCommentInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutCommentInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutCommentInput, {
    nullable: true
  })
  update?: UserUpdateWithoutCommentInput | undefined;
}
