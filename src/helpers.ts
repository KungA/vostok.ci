﻿import * as github from "@actions/github";
import os from "os";
import * as path from "path"

export const moduleFolder = "vostok.module";

export function getTestsCacheKey() {
    return `${github.context.repo.owner}.${github.context.repo.repo}-${process.env.GITHUB_RUN_ID}-${process.env.GITHUB_RUN_ATTEMPT}`;
}

export function getTestsCachePaths() {
    return [moduleFolder, "vostok.devtools"];
}