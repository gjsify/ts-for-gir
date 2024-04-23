#!/bin/bash

# This script is used to find all the .gir files in the Fedora repositories that are not already found on the filesystem.
# Feel free to add a similar script for other distributions.

echo "Starting to find .gir files..."
# First, get the list of .gir file paths from the repositories
repo_gir_files=$(dnf repoquery -l '*/*.gir' | grep '.gir$' | sort -u)

# Filter out .gir files that are already on the filesystem
gir_files=()
for file in $repo_gir_files; do
    if [ ! -f "$file" ]; then
        gir_files+=("$file")
    fi
done

echo "Found ${#gir_files[@]} .gir files not on the filesystem:"
echo "${gir_files[@]}"

# Initialize an array to store all package names
pkg_names=()

echo "Processing .gir files to find corresponding packages..."
# For each file path, find the corresponding package and store it in the array
total_files=$(echo "$gir_files" | wc -l)
current_file=0
for file in $gir_files; do
    current_file=$((current_file + 1))
    echo -ne "Processing file $current_file of $total_files\r"
    pkg=$(dnf repoquery --whatprovides "$file" | sort -V | tail -n 1)
    pkg_names+=("$pkg")
done
echo -ne '\n'

echo "Found ${#pkg_names[@]} unique packages."
echo "${pkg_names[@]}"

echo "Sorting and deduplicating package names..."
# Sort the package names to only get the latest version
pkg_names=($(for pkg in "${pkg_names[@]}"; do echo "$pkg"; done | sort -u))

echo "Completed. Found ${#pkg_names[@]} unique packages."
# Output all collected package names
echo "${pkg_names[@]}"