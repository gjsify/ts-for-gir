#!/bin/bash

echo "Starting to find .gir files..."
# First, get the list of .gir file paths from the repositories
repo_gir_files=$(dnf repoquery -l '*/*.gir' | grep '\.gir$' | sort -u)

# Filter out .gir files that are already on the filesystem
gir_files=()
while IFS= read -r file; do
    if [ ! -f "$file" ]; then
        gir_files+=("$file")
    fi
done <<< "$repo_gir_files"

echo "Found ${#gir_files[@]} .gir files not on the filesystem."

# Initialize an array to store all package names
pkg_names=()

echo "Processing .gir files to find corresponding packages..."
# For each file path, find the corresponding package and store it in the array
total_files=${#gir_files[@]}
for ((i=0; i<total_files; i++)); do
    file="${gir_files[i]}"
    echo -ne "Processing file $((i+1)) of $total_files\r"
    pkg=$(dnf repoquery --whatprovides "$file" | sort -V | tail -n 1 | sed 's/-[0-9].*$//')
    if [ -n "$pkg" ]; then
        pkg_names+=("$pkg")
    fi
done
echo -ne '\n'

echo "Found ${#pkg_names[@]} packages."

echo "Sorting and deduplicating package names..."
# Sort and deduplicate the package names
readarray -t pkg_names < <(printf '%s\n' "${pkg_names[@]}" | sort -u)

echo "Completed. Found ${#pkg_names[@]} unique packages."
# Output all collected package names
printf '%s\n' "${pkg_names[@]}"

echo -e "\nTo install these packages, run:"
echo "sudo dnf install --skip-unavailable $(printf '%s ' "${pkg_names[@]}")"